import React, { forwardRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import type { SizeScale, UniversalProps } from '../../types';
import { InputWrapper } from '../InputWrapper';
import inputStyles from '../TextField/TextField.module.css';
import styles from './NumberInput.module.css';

export interface NumberInputProps extends UniversalProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'> {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  error?: string | boolean;
  required?: boolean;
  size?: SizeScale;
  disabled?: boolean;
  value?: number | '';
  defaultValue?: number | '';
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  hideControls?: boolean;
  onChange?: (value: number | undefined) => void;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: inputStyles.sizeXs, sm: inputStyles.sizeSm, md: inputStyles.sizeMd, lg: inputStyles.sizeLg, xl: inputStyles.sizeXl,
};

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ label, description, error, required = false, size = 'md', disabled = false, value: controlledValue, defaultValue = '', min = -Infinity, max = Infinity, step = 1, precision = 0, hideControls = false, onChange, className, style, placeholder, id, ...restProps }, ref) => {
    const isControlled = controlledValue !== undefined;
    const [innerValue, setInnerValue] = useState<string>(() => {
      const initial = isControlled ? controlledValue : defaultValue;
      if (typeof initial === 'number') return precision > 0 ? initial.toFixed(precision) : String(initial);
      return '';
    });

    useEffect(() => {
      if (isControlled) {
        if (typeof controlledValue === 'number') setInnerValue(precision > 0 ? controlledValue.toFixed(precision) : String(controlledValue));
        else setInnerValue('');
      }
    }, [controlledValue, isControlled, precision]);

    const formatValue = (num: number): string => {
      const clamped = Math.max(min, Math.min(max, num));
      return precision > 0 ? clamped.toFixed(precision) : String(clamped);
    };

    const parseValue = (text: string): number | undefined => {
      if (text === '' || text === '-') return undefined;
      const parsed = parseFloat(text);
      return isNaN(parsed) ? undefined : Math.max(min, Math.min(max, parsed));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setInnerValue(val);
      onChange?.(parseValue(val));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const parsed = parseValue(innerValue);
      setInnerValue(parsed !== undefined ? formatValue(parsed) : '');
      restProps.onBlur?.(e);
    };

    const stepValue = (direction: 1 | -1) => {
      if (disabled) return;
      const current = parseValue(innerValue) ?? (direction === 1 ? (min !== -Infinity ? min : 0) : (max !== Infinity ? max : 0));
      const formatted = formatValue(current + direction * step);
      setInnerValue(formatted);
      onChange?.(parseFloat(formatted));
    };

    const hasError = Boolean(error);
    const showControls = !hideControls && !disabled;
    const inputClasses = clsx(inputStyles.input, sizeClasses[size], { [inputStyles.error]: hasError, [inputStyles.withRightSection]: showControls });

    return (
      <InputWrapper label={label} description={description} error={error} required={required} size={size} disabled={disabled} className={className} style={style}>
        <div className={inputStyles.inputContainer}>
          <input ref={ref} id={id} type="text" inputMode="decimal" value={innerValue} placeholder={placeholder} disabled={disabled} required={required} aria-invalid={hasError} className={inputClasses} onChange={handleInputChange} onBlur={handleBlur} {...restProps} />
          {showControls && (
            <div className={styles.controls}>
              <button type="button" tabIndex={-1} aria-label="Increment value" className={styles.controlButton} onClick={() => stepValue(1)}>
                <svg className={styles.controlIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15" /></svg>
              </button>
              <button type="button" tabIndex={-1} aria-label="Decrement value" className={styles.controlButton} onClick={() => stepValue(-1)}>
                <svg className={styles.controlIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
            </div>
          )}
        </div>
      </InputWrapper>
    );
  }
);
NumberInput.displayName = 'NumberInput';
