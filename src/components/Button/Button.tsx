import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, RadiusScale, SemanticColors } from '../../types';
import styles from './Button.module.css';

export type ButtonVariant = 'filled' | 'light' | 'outline' | 'subtle' | 'link';

export interface ButtonProps extends UniversalProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ButtonVariant;
  color?: SemanticColors;
  size?: SizeScale;
  radius?: RadiusScale;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
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
  'subtle-primary': styles.subtlePrimary, 'subtle-secondary': styles.subtleSecondary, 'subtle-neutral': styles.subtleNeutral,
  'subtle-success': styles.subtleSuccess, 'subtle-warning': styles.subtleWarning, 'subtle-danger': styles.subtleDanger, 'subtle-info': styles.subtleInfo,
  'link-primary': styles.linkPrimary, 'link-secondary': styles.linkSecondary, 'link-neutral': styles.linkNeutral,
  'link-success': styles.linkSuccess, 'link-warning': styles.linkWarning, 'link-danger': styles.linkDanger, 'link-info': styles.linkInfo,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'filled', color = 'primary', size = 'md', radius = 'md', loading = false, disabled = false, fullWidth = false, leftSection, rightSection, type = 'button', className, style, ...restProps }, ref) => {
    const key = variant + '-' + color;
    const variantColorClass = variantColorMap[key] || styles.filledPrimary;
    const cls = clsx(styles.button, sizeClasses[size], radiusClasses[radius], variantColorClass, { [styles.fullWidth]: fullWidth, [styles.disabled]: disabled || loading }, className);
    return (
      <button ref={ref} type={type} disabled={disabled || loading} aria-busy={loading} className={cls} style={style} {...restProps}>
        {loading ? (
          <span className={styles.spinner} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" /></svg>
          </span>
        ) : leftSection && <span className={styles.leftSection}>{leftSection}</span>}
        <span className={styles.label}>{children}</span>
        {!loading && rightSection && <span className={styles.rightSection}>{rightSection}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';
