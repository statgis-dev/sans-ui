import React from 'react';
import { useMap } from 'react-map-gl/maplibre';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import type { SizeScale } from '../../types';
import styles from './MapControls.module.css';

export interface ZoomControlGroupProps {
  mapId?: string;
  size?: SizeScale;
  className?: string;
  style?: React.CSSProperties;
}

export const ZoomControlGroup: React.FC<ZoomControlGroupProps> = ({
  mapId,
  size = 'md',
  className,
  style,
}) => {
  const mapContext = useMap();
  const map = mapId ? mapContext[mapId] : mapContext.current;

  const handleZoomIn = () => map?.zoomIn();
  const handleZoomOut = () => map?.zoomOut();

  const plusIcon = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  const minusIcon = (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  return (
    <div className={clsx(styles.zoomGroup, className)} style={style}>
      <IconButton
        icon={plusIcon}
        aria-label="Zoom in"
        title="Zoom in"
        variant="subtle"
        color="neutral"
        size={size}
        radius="none"
        className={styles.zoomBtnTop}
        onClick={handleZoomIn}
      />
      <IconButton
        icon={minusIcon}
        aria-label="Zoom out"
        title="Zoom out"
        variant="subtle"
        color="neutral"
        size={size}
        radius="none"
        className={styles.zoomBtnBottom}
        onClick={handleZoomOut}
      />
    </div>
  );
};
ZoomControlGroup.displayName = 'ZoomControlGroup';
