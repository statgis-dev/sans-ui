import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SemanticColors } from '../../types';
import styles from './Divider.module.css';

export interface DividerProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  size?: 1 | 2 | 4 | 8;
  color?: SemanticColors | 'border';
  label?: string | React.ReactNode;
}

const colorTokens: Record<string, string> = {
  border: 'var(--border-subtle)', neutral: 'var(--border-strong)', primary: 'var(--color-primary-500)',
  secondary: 'var(--color-secondary-500)', success: 'var(--color-success-500)',
  warning: 'var(--color-warning-500)', danger: 'var(--color-danger-500)', info: 'var(--color-info-500)',
};

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = 'horizontal', variant = 'solid', size = 1, color = 'border', label, className, style, ...restProps }, ref) => {
    const isHorizontal = orientation === 'horizontal';
    const customStyle = {
      ...style,
      '--divider-size': size + 'px',
      '--divider-style': variant,
      '--divider-color': colorTokens[color] || 'var(--border-subtle)',
    } as React.CSSProperties;
    const cls = clsx(styles.divider, isHorizontal ? styles.horizontal : styles.vertical, className);
    return (
      <div ref={ref} role="separator" aria-orientation={orientation} className={cls} style={customStyle} {...restProps}>
        <span className={styles.line} />
        {label && isHorizontal && <span className={styles.label}>{label}</span>}
        {label && isHorizontal && <span className={styles.line} />}
      </div>
    );
  }
);
Divider.displayName = 'Divider';
