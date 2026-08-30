import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale } from '../../types';
import styles from './InputWrapper.module.css';

export interface InputWrapperProps extends UniversalProps {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  error?: string | boolean;
  required?: boolean;
  size?: SizeScale;
  disabled?: boolean;
  id?: string;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};

export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ children, label, description, error, required = false, size = 'md', disabled = false, className, style, id }, ref) => {
    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;
    const cls = clsx(styles.wrapper, sizeClasses[size], { [styles.disabled]: disabled }, className);
    return (
      <div ref={ref} className={cls} style={style} id={id}>
        {label && (
          <div className={styles.labelRow}>
            <label className={styles.label}>{label}{required && <span className={styles.requiredAsterisk}>*</span>}</label>
          </div>
        )}
        {description && <div className={styles.description}>{description}</div>}
        <div className={styles.inputArea}>{children}</div>
        {hasError && errorMessage && <div className={styles.errorText}>{errorMessage}</div>}
      </div>
    );
  }
);
InputWrapper.displayName = 'InputWrapper';
