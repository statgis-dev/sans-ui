import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import type { SizeScale, RadiusScale } from '../../types';
import styles from './MapControls.module.css';

export interface FullscreenControlProps {
  containerRef?: React.RefObject<HTMLElement>;
  size?: SizeScale;
  radius?: RadiusScale;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  title?: string;
}

export const FullscreenControl: React.FC<FullscreenControlProps> = ({
  containerRef,
  size = 'md',
  radius = 'md',
  className,
  style,
  'aria-label': ariaLabel,
  title,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleClick = () => {
    if (!document.fullscreenElement) {
      const target = containerRef?.current || document.documentElement;
      target.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };

  const expandIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );

  const compressIcon = (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
    </svg>
  );

  const displayTitle = title || (isFullscreen ? 'Exit fullscreen' : 'Toggle fullscreen');
  const displayLabel = ariaLabel || displayTitle;

  return (
    <IconButton
      icon={isFullscreen ? compressIcon : expandIcon}
      aria-label={displayLabel}
      title={displayTitle}
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
FullscreenControl.displayName = 'FullscreenControl';
