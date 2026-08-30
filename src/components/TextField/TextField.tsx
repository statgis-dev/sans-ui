import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { SizeScale, UniversalProps } from '../../types';
import { InputWrapper } from '../InputWrapper';
import styles from './TextField.module.css';

export type TextFieldType = 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';

export interface TextFieldProps extends UniversalProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'type'> {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  error?: string | boolean;
  required?: boolean;
  size?: SizeScale;
  disabled?: boolean;
  type?: TextFieldType;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, description, error, required = false, size = 'md', disabled = false, value, defaultValue, placeholder, type = 'text', leftSection, rightSection, className, style, id, onChange, ...restProps }, ref) => {
    const hasError = Boolean(error);
    const inputClasses = clsx(styles.input, sizeClasses[size], { [styles.error]: hasError, [styles.withLeftSection]: Boolean(leftSection), [styles.withRightSection]: Boolean(rightSection) });
    return (
      <InputWrapper label={label} description={description} error={error} required={required} size={size} disabled={disabled} className={className} style={style}>
        <div className={styles.inputContainer}>
          {leftSection && <span className={styles.leftSection}>{leftSection}</span>}
          <input ref={ref} id={id} type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} required={required} aria-invalid={hasError} className={inputClasses} onChange={onChange} {...restProps} />
          {rightSection && <span className={styles.rightSection}>{rightSection}</span>}
        </div>
      </InputWrapper>
    );
  }
);
TextField.displayName = 'TextField';
