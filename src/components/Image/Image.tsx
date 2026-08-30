import React, { forwardRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import type { UniversalProps, RadiusScale } from '../../types';
import styles from './Image.module.css';

export type ImageFit = 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';

export interface ImageProps extends UniversalProps, Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  fit?: ImageFit;
  fallback?: React.ReactNode;
  radius?: RadiusScale;
  loading?: 'lazy' | 'eager';
}

const fitClasses: Record<ImageFit, string> = {
  cover: styles.fitCover, contain: styles.fitContain, fill: styles.fitFill, 'scale-down': styles.fitScaleDown, none: styles.fitNone,
};
const radiusClasses: Record<RadiusScale, string> = {
  none: styles.radiusNone, xs: styles.radiusXs, sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl, full: styles.radiusFull,
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fit = 'cover', fallback, radius = 'none', loading = 'lazy', className, style, onError, width, height, ...restProps }, ref) => {
    const [hasError, setHasError] = useState(false);
    useEffect(() => { setHasError(false); }, [src]);
    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true);
      onError?.(e);
    };
    const containerStyle: React.CSSProperties = {
      ...style,
      width: width !== undefined ? (typeof width === 'number' ? width + 'px' : width) : style?.width,
      height: height !== undefined ? (typeof height === 'number' ? height + 'px' : height) : style?.height,
    };
    const containerClasses = clsx(styles.container, radiusClasses[radius], className);
    if (hasError && fallback) {
      return <div className={clsx(containerClasses, styles.fallbackWrapper)} style={containerStyle}>{fallback}</div>;
    }
    return (
      <div className={containerClasses} style={containerStyle}>
        <img ref={ref} src={src} alt={alt} loading={loading} width={width} height={height} onError={handleError} className={clsx(styles.image, fitClasses[fit], radiusClasses[radius])} {...restProps} />
      </div>
    );
  }
);
Image.displayName = 'Image';
