import React, { useEffect, useState } from 'react';
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
  'aria-label': ariaLabel = 'Reset North and Bearing',
  title = 'Reset North',
}) => {
  const [bearing, setBearing] = useState(0);
  const mapContext = useMap();
  const map = mapId ? mapContext[mapId] : mapContext.current;

  useEffect(() => {
    if (!map) return;
    const updateBearing = () => {
      setBearing(map.getBearing() || 0);
    };

    updateBearing();
    map.on('rotate', updateBearing);
    map.on('pitch', updateBearing);
    map.on('move', updateBearing);

    return () => {
      map.off('rotate', updateBearing);
      map.off('pitch', updateBearing);
      map.off('move', updateBearing);
    };
  }, [map]);

  const handleClick = () => {
    map?.resetNorthPitch({ duration: 500 });
  };

  const needleIcon = (
    <span className={styles.compassNeedle} style={{ transform: `rotate(${-bearing}deg)` }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path d="M12 3L8 12H16L12 3Z" fill="var(--color-danger-500, #ef4444)" />
        <path d="M12 21L8 12H16L12 21Z" fill="var(--text-muted, #94a3b8)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    </span>
  );

  return (
    <IconButton
      icon={needleIcon}
      aria-label={ariaLabel}
      title={title}
      variant="light"
      color="neutral"
      size={size}
      radius={radius}
      className={clsx(styles.mapButton, className)}
      style={style}
      onClick={handleClick}
    />
  );
};
CompassControl.displayName = 'CompassControl';
