import React, { useState } from 'react';
import { useMap } from 'react-map-gl/maplibre';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import type { SizeScale, RadiusScale } from '../../types';
import styles from './MapControls.module.css';

export interface GeolocateControlProps {
  zoom?: number;
  mapId?: string;
  size?: SizeScale;
  radius?: RadiusScale;
  onGeolocate?: (coords: GeolocationCoordinates) => void;
  onError?: (error: GeolocationPositionError) => void;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const GeolocateControl: React.FC<GeolocateControlProps> = ({
  zoom = 14,
  mapId,
  size = 'md',
  radius = 'md',
  onGeolocate,
  onError,
  className,
  style,
  'aria-label': ariaLabel = 'Locate user position',
  title = 'Find my location',
}) => {
  const [loading, setLoading] = useState(false);
  const mapContext = useMap();
  const map = mapId ? mapContext[mapId] : mapContext.current;

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoading(false);
        const { longitude, latitude } = pos.coords;
        map?.flyTo({
          center: [longitude, latitude],
          zoom,
          essential: true,
        });
        onGeolocate?.(pos.coords);
      },
      (err) => {
        setLoading(false);
        onError?.(err);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const crosshairsIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="7" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  );

  return (
    <IconButton
      icon={crosshairsIcon}
      aria-label={ariaLabel}
      title={title}
      variant="light"
      color="neutral"
      size={size}
      radius={radius}
      loading={loading}
      className={clsx(styles.mapButton, className)}
      style={style}
      onClick={handleClick}
    />
  );
};
GeolocateControl.displayName = 'GeolocateControl';
