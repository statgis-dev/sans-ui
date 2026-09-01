import React from 'react';
import clsx from 'clsx';
import type { SpacingScale } from '../../types';
import styles from './MapControls.module.css';

export type MapControlPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MapControlWrapperProps {
  position?: MapControlPosition;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const positionClasses: Record<MapControlPosition, string> = {
  'top-left': styles.topLeft,
  'top-right': styles.topRight,
  'bottom-left': styles.bottomLeft,
  'bottom-right': styles.bottomRight,
};

const gapClasses: Record<'xs' | 'sm' | 'md' | 'lg', string> = {
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
};

export const MapControlWrapper: React.FC<MapControlWrapperProps> = ({
  position = 'top-right',
  gap = 'sm',
  children,
  className,
  style,
}) => {
  return (
    <div
      className={clsx(styles.overlay, positionClasses[position], gapClasses[gap], className)}
      style={style}
    >
      {children}
    </div>
  );
};
MapControlWrapper.displayName = 'MapControlWrapper';
