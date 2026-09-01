import React, { useEffect, useState, useRef } from 'react';
import { useMap } from 'react-map-gl/maplibre';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import type { SizeScale, RadiusScale } from '../../types';
import styles from './MapControls.module.css';

export interface CompassControlProps {
  mapId?: string;
  size?: SizeScale;
  radius?: RadiusScale;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const CompassControl: React.FC<CompassControlProps> = ({
  mapId,
  size = 'md',
  radius = 'md',
  className,
  style,
  'aria-label': ariaLabel = 'Reset North and Bearing (drag to rotate & pitch)',
  title = 'Compass: click to reset North, drag to rotate & pitch',
}) => {
  const [bearing, setBearing] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const mapContext = useMap();
  const map = mapId ? mapContext[mapId] : mapContext.current;

  const dragRef = useRef<{
    active: boolean;
    hasMoved: boolean;
    startX: number;
    startY: number;
    centerX: number;
    centerY: number;
    startAngle: number;
    startBearing: number;
    startPitch: number;
  }>({
    active: false,
    hasMoved: false,
    startX: 0,
    startY: 0,
    centerX: 0,
    centerY: 0,
    startAngle: 0,
    startBearing: 0,
    startPitch: 0,
  });

  useEffect(() => {
    if (!map) return;
    const syncCamera = () => {
      setBearing(map.getBearing() || 0);
      setPitch(map.getPitch() || 0);
    };

    syncCamera();
    map.on('rotate', syncCamera);
    map.on('pitch', syncCamera);
    map.on('move', syncCamera);

    return () => {
      map.off('rotate', syncCamera);
      map.off('pitch', syncCamera);
      map.off('move', syncCamera);
    };
  }, [map]);

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0 || !buttonRef.current || !map) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI) + 90;

    dragRef.current = {
      active: true,
      hasMoved: false,
      startX: e.clientX,
      startY: e.clientY,
      centerX,
      centerY,
      startAngle,
      startBearing: map.getBearing() || 0,
      startPitch: map.getPitch() || 0,
    };

    try {
      buttonRef.current.setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag.active || !map) return;

    const deltaX = e.clientX - drag.startX;
    const deltaY = e.clientY - drag.startY;
    const distance = Math.hypot(deltaX, deltaY);

    if (!drag.hasMoved && distance > 3) {
      drag.hasMoved = true;
      setIsDragging(true);
    }

    if (drag.hasMoved) {
      const currentAngle = Math.atan2(e.clientY - drag.centerY, e.clientX - drag.centerX) * (180 / Math.PI) + 90;
      const angleDiff = currentAngle - drag.startAngle;
      const newBearing = drag.startBearing - angleDiff;

      map.setBearing(newBearing);
      setBearing(newBearing);

      const pitchDelta = (drag.startY - e.clientY) * 0.5;
      const newPitch = Math.max(0, Math.min(85, drag.startPitch + pitchDelta));
      map.setPitch(newPitch);
      setPitch(newPitch);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    try {
      if (buttonRef.current?.hasPointerCapture(e.pointerId)) {
        buttonRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }

    if (!drag.hasMoved) {
      map?.resetNorthPitch({ duration: 500 });
    }

    drag.active = false;
    drag.hasMoved = false;
    setIsDragging(false);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLButtonElement>) => {
    dragRef.current.active = false;
    dragRef.current.hasMoved = false;
    setIsDragging(false);
    try {
      if (buttonRef.current?.hasPointerCapture(e.pointerId)) {
        buttonRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore
    }
  };

  const needleIcon = (
    <span
      className={clsx(styles.compassNeedle, isDragging && styles.compassNeedleDragging)}
      style={{
        transform: `rotate(${-bearing}deg) rotateX(${pitch}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path d="M12 3L8 12H16L12 3Z" fill="var(--color-danger-500, #ef4444)" />
        <path d="M12 21L8 12H16L12 21Z" fill="var(--text-muted, #94a3b8)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </span>
  );

  return (
    <IconButton
      ref={buttonRef}
      icon={needleIcon}
      aria-label={ariaLabel}
      title={title}
      variant="light"
      color="neutral"
      size={size}
      radius={radius}
      className={clsx(
        styles.mapButton,
        styles.compassButton,
        isDragging && styles.compassDragging,
        className
      )}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    />
  );
};
CompassControl.displayName = 'CompassControl';
