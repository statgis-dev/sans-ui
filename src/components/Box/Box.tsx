import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, SpacingScale, RadiusScale, SemanticColors } from '../../types';
import styles from './Box.module.css';

export interface BoxProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  bg?: 'app' | 'surface' | 'elevated' | SemanticColors;
  padding?: SpacingScale;
  radius?: RadiusScale;
  border?: boolean;
  shadow?: SizeScale | 'none';
}

const sizeClasses: Record<string, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl, full: styles.sizeFull,
};
const bgClasses: Record<string, string> = {
  app: styles.bgApp, surface: styles.bgSurface, elevated: styles.bgElevated, primary: styles.bgPrimary,
  secondary: styles.bgSecondary, neutral: styles.bgNeutral, success: styles.bgSuccess, warning: styles.bgWarning,
  danger: styles.bgDanger, info: styles.bgInfo,
};
const paddingClasses: Record<SpacingScale, string> = {
  none: styles.padNone, xs: styles.padXs, sm: styles.padSm, md: styles.padMd, lg: styles.padLg, xl: styles.padXl, '2xl': styles.pad2Xl,
};
const radiusClasses: Record<RadiusScale, string> = {
  none: styles.radiusNone, xs: styles.radiusXs, sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl, full: styles.radiusFull,
};
const shadowClasses: Record<string, string> = {
  none: styles.shadowNone, xs: styles.shadowXs, sm: styles.shadowSm, md: styles.shadowMd, lg: styles.shadowLg, xl: styles.shadowXl,
};

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = 'div', children, size, centered = false, bg = 'surface', padding = 'none', radius = 'none', border = false, shadow = 'none', className, style, ...restProps }, ref) => {
    const cls = clsx(styles.box, size && sizeClasses[size], bg && bgClasses[bg], padding && paddingClasses[padding], radius && radiusClasses[radius], shadow && shadowClasses[shadow], { [styles.centered]: centered, [styles.border]: border }, className);
    return <Component ref={ref as any} className={cls} style={style} {...restProps}>{children}</Component>;
  }
);
Box.displayName = 'Box';
