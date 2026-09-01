import React from 'react';
import { useMap } from 'react-map-gl/maplibre';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import type { SizeScale, RadiusScale } from '../../types';
import styles from './MapControls.module.css';

export interface DefaultViewControlProps {
  center?: [number, number];
  zoom?: number;
  pitch?: number;
  bearing?: number;
  mapId?: string;
  size?: SizeScale;
  radius?: RadiusScale;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const DefaultViewControl: React.FC<DefaultViewControlProps> = ({
  center = [-74.006, 40.7128],
  zoom = 9,
  pitch = 0,
  bearing = 0,
  mapId,
  size = 'md',
  radius = 'md',
  className,
  style,
  'aria-label': ariaLabel = 'Reset to default view',
  title = 'Reset to default view',
}) => {
  const mapContext = useMap();
  const map = mapId ? mapContext[mapId] : mapContext.current;

  const handleClick = () => {
    map?.flyTo({
      center,
      zoom,
      pitch,
      bearing,
      essential: true,
    });
  };

  const homeIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );

  return (
    <IconButton
      icon={homeIcon}
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
DefaultViewControl.displayName = 'DefaultViewControl';
