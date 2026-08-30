import React, { forwardRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, RadiusScale, SemanticColors } from '../../types';
import styles from './Avatar.module.css';

export interface AvatarProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  src?: string;
  name?: string;
  alt?: string;
  size?: SizeScale | number;
  radius?: RadiusScale;
  color?: SemanticColors | 'auto';
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};
const radiusClasses: Record<RadiusScale, string> = {
  none: styles.radiusNone, xs: styles.radiusXs, sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl, full: styles.radiusFull,
};
const colorClasses: Record<SemanticColors, string> = {
  primary: styles.colorPrimary, secondary: styles.colorSecondary, neutral: styles.colorNeutral,
  success: styles.colorSuccess, warning: styles.colorWarning, danger: styles.colorDanger, info: styles.colorInfo,
};
const semanticColorsList: SemanticColors[] = ['primary', 'secondary', 'success', 'warning', 'info'];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return '';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getAutoColor(name: string): SemanticColors {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return semanticColorsList[Math.abs(hash) % semanticColorsList.length];
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, name, alt = 'avatar', size = 'md', radius = 'full', color = 'neutral', className, style, ...restProps }, ref) => {
    const [hasError, setHasError] = useState(false);
    useEffect(() => { setHasError(false); }, [src]);
    const isNumeric = typeof size === 'number';
    const initials = name ? getInitials(name) : '';
    const resolvedColor: SemanticColors = color === 'auto' ? (name ? getAutoColor(name) : 'neutral') : color;
    const dynamicStyle = isNumeric ? ({ ...style, width: size + 'px', height: size + 'px', fontSize: Math.round(size * 0.35) + 'px' } as React.CSSProperties) : style;
    const cls = clsx(styles.avatar, !isNumeric && sizeClasses[size as SizeScale], radiusClasses[radius], colorClasses[resolvedColor], className);
    const showImage = src && !hasError;

    return (
      <div ref={ref} className={cls} style={dynamicStyle} aria-label={name || alt} {...restProps}>
        {showImage ? (
          <img src={src} alt={alt} onError={() => setHasError(true)} className={styles.image} />
        ) : initials ? (
          <span>{initials}</span>
        ) : (
          <svg className={styles.fallbackIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';
