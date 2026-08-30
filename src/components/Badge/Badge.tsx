import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, RadiusScale, SemanticColors } from '../../types';
import styles from './Badge.module.css';

export type BadgeVariant = 'filled' | 'light' | 'outline' | 'dot';

export interface BadgeProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  variant?: BadgeVariant;
  color?: SemanticColors;
  size?: SizeScale;
  radius?: RadiusScale;
  leftSection?: React.ReactNode;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};
const radiusClasses: Record<RadiusScale, string> = {
  none: styles.radiusNone, xs: styles.radiusXs, sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl, full: styles.radiusFull,
};

const variantColorMap: Record<string, string> = {
  'filled-primary': styles.filledPrimary, 'filled-secondary': styles.filledSecondary, 'filled-neutral': styles.filledNeutral,
  'filled-success': styles.filledSuccess, 'filled-warning': styles.filledWarning, 'filled-danger': styles.filledDanger, 'filled-info': styles.filledInfo,
  'light-primary': styles.lightPrimary, 'light-secondary': styles.lightSecondary, 'light-neutral': styles.lightNeutral,
  'light-success': styles.lightSuccess, 'light-warning': styles.lightWarning, 'light-danger': styles.lightDanger, 'light-info': styles.lightInfo,
  'outline-primary': styles.outlinePrimary, 'outline-secondary': styles.outlineSecondary, 'outline-neutral': styles.outlineNeutral,
  'outline-success': styles.outlineSuccess, 'outline-warning': styles.outlineWarning, 'outline-danger': styles.outlineDanger, 'outline-info': styles.outlineInfo,
  'dot-primary': styles.dotPrimary, 'dot-secondary': styles.dotSecondary, 'dot-neutral': styles.dotNeutral,
  'dot-success': styles.dotSuccess, 'dot-warning': styles.dotWarning, 'dot-danger': styles.dotDanger, 'dot-info': styles.dotInfo,
};

const dotCircleMap: Record<SemanticColors, string> = {
  primary: styles.dotCirclePrimary, secondary: styles.dotCircleSecondary, neutral: styles.dotCircleNeutral,
  success: styles.dotCircleSuccess, warning: styles.dotCircleWarning, danger: styles.dotCircleDanger, info: styles.dotCircleInfo,
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ as: Component = 'span', children, variant = 'light', color = 'primary', size = 'md', radius = 'xl', leftSection, className, style, ...restProps }, ref) => {
    const key = variant + '-' + color;
    const cls = clsx(styles.badge, sizeClasses[size], radiusClasses[radius], variantColorMap[key] || styles.lightPrimary, className);
    return (
      <Component ref={ref as any} className={cls} style={style} {...restProps}>
        {variant === 'dot' && <span className={clsx(styles.dotCircle, dotCircleMap[color])} aria-hidden="true" />}
        {leftSection && <span className={styles.leftSection}>{leftSection}</span>}
        <span>{children}</span>
      </Component>
    );
  }
);
Badge.displayName = 'Badge';
