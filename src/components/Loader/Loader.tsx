import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, SemanticColors } from '../../types';
import styles from './Loader.module.css';

export type LoaderVariant = 'spinner' | 'dots' | 'bars';

export interface LoaderProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  variant?: LoaderVariant;
  color?: SemanticColors;
  size?: SizeScale | number;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};
const colorClasses: Record<SemanticColors, string> = {
  primary: styles.colorPrimary, secondary: styles.colorSecondary, neutral: styles.colorNeutral,
  success: styles.colorSuccess, warning: styles.colorWarning, danger: styles.colorDanger, info: styles.colorInfo,
};

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(
  ({ variant = 'spinner', color = 'primary', size = 'md', className, style, ...restProps }, ref) => {
    const isNumeric = typeof size === 'number';
    const customStyle: React.CSSProperties = isNumeric ? { ...style, width: size + 'px', height: size + 'px' } : style || {};
    const cls = clsx(styles.loader, !isNumeric && sizeClasses[size as SizeScale], colorClasses[color], className);

    return (
      <span ref={ref} role="status" aria-live="polite" className={cls} style={customStyle} {...restProps}>
        {variant === 'spinner' && (
          <svg className={styles.spinnerSvg} viewBox="0 0 50 50">
            <circle className={styles.spinnerCircle} cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
          </svg>
        )}
        {variant === 'dots' && (
          <span className={styles.dotsContainer}><span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} /></span>
        )}
        {variant === 'bars' && (
          <span className={styles.barsContainer}><span className={styles.bar} /><span className={styles.bar} /><span className={styles.bar} /></span>
        )}
      </span>
    );
  }
);
Loader.displayName = 'Loader';
