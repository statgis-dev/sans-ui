import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, RadiusScale, SemanticColors } from '../../types';
import styles from './IconButton.module.css';

export type IconButtonVariant = 'filled' | 'light' | 'outline' | 'subtle';

export interface IconButtonProps extends UniversalProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  icon: React.ReactNode;
  'aria-label': string;
  variant?: IconButtonVariant;
  color?: SemanticColors;
  size?: SizeScale;
  radius?: RadiusScale;
  loading?: boolean;
  disabled?: boolean;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};
const radiusClasses: Record<RadiusScale, string> = {
  none: styles.radiusNone, xs: styles.radiusXs, sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl, full: styles.radiusFull,
};

const variantColorMap: Record<string, string> = {
  'subtle-neutral': styles.subtleNeutral, 'filled-neutral': styles.filledNeutral, 'light-neutral': styles.lightNeutral, 'outline-neutral': styles.outlineNeutral,
  'subtle-primary': styles.subtlePrimary, 'filled-primary': styles.filledPrimary, 'light-primary': styles.lightPrimary, 'outline-primary': styles.outlinePrimary,
  'subtle-secondary': styles.subtleSecondary, 'filled-secondary': styles.filledSecondary, 'light-secondary': styles.lightSecondary, 'outline-secondary': styles.outlineSecondary,
  'subtle-success': styles.subtleSuccess, 'filled-success': styles.filledSuccess, 'light-success': styles.lightSuccess, 'outline-success': styles.outlineSuccess,
  'subtle-warning': styles.subtleWarning, 'filled-warning': styles.filledWarning, 'light-warning': styles.lightWarning, 'outline-warning': styles.outlineWarning,
  'subtle-danger': styles.subtleDanger, 'filled-danger': styles.filledDanger, 'light-danger': styles.lightDanger, 'outline-danger': styles.outlineDanger,
  'subtle-info': styles.subtleInfo, 'filled-info': styles.filledInfo, 'light-info': styles.lightInfo, 'outline-info': styles.outlineInfo,
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, 'aria-label': ariaLabel, variant = 'subtle', color = 'neutral', size = 'md', radius = 'md', loading = false, disabled = false, type = 'button', className, style, ...restProps }, ref) => {
    const key = variant + '-' + color;
    const cls = clsx(styles.iconButton, sizeClasses[size], radiusClasses[radius], variantColorMap[key] || styles.subtleNeutral, { [styles.disabled]: disabled || loading }, className);
    return (
      <button ref={ref} type={type} aria-label={ariaLabel} disabled={disabled || loading} aria-busy={loading} className={cls} style={style} {...restProps}>
        {loading ? (
          <span className={styles.spinner} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" /></svg>
          </span>
        ) : icon}
      </button>
    );
  }
);
IconButton.displayName = 'IconButton';
