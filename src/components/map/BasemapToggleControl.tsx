import React from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import type { SizeScale, RadiusScale } from '../../types';
import styles from './MapControls.module.css';

export interface BasemapToggleControlProps {
  currentBasemap: 'vector' | 'satellite' | string;
  onToggle: () => void;
  size?: SizeScale;
  radius?: RadiusScale;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const BasemapToggleControl: React.FC<BasemapToggleControlProps> = ({
  currentBasemap,
  onToggle,
  size = 'md',
  radius = 'md',
  className,
  style,
  'aria-label': ariaLabel,
  title,
}) => {
  const isSatellite = currentBasemap === 'satellite';

  // Vector / Street icon
  const vectorIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );

  // Satellite / Imagery icon
  const satelliteIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );

  const displayTitle = title || (isSatellite ? 'Switch to Vector Map' : 'Switch to Satellite Imagery');
  const displayLabel = ariaLabel || displayTitle;

  return (
    <IconButton
      icon={isSatellite ? vectorIcon : satelliteIcon}
      aria-label={displayLabel}
      title={displayTitle}
      variant="light"
      color="neutral"
      size={size}
      radius={radius}
      className={clsx(styles.mapButton, className)}
      style={style}
      onClick={onToggle}
    />
  );
};
BasemapToggleControl.displayName = 'BasemapToggleControl';
