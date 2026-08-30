import React, { forwardRef, useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { DayPicker } from 'react-day-picker';
import { format, isValid } from 'date-fns';
import type { SizeScale, UniversalProps } from '../../types';
import { InputWrapper } from '../InputWrapper';
import styles from './DatePicker.module.css';

export interface DatePickerProps extends UniversalProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  error?: string | boolean;
  required?: boolean;
  size?: SizeScale;
  disabled?: boolean;
  value?: Date | null;
  defaultValue?: Date | null;
  placeholder?: string;
  dateFormat?: string;
  clearable?: boolean;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (date: Date | null) => void;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ label, description, error, required = false, size = 'md', disabled = false, value: controlledValue, defaultValue, placeholder = 'Pick a date...', dateFormat = 'PPP', clearable = false, minDate, maxDate, onChange, className, style, id, ...restProps }, ref) => {
    const isControlled = controlledValue !== undefined;
    const [selectedDate, setSelectedDate] = useState<Date | null>((isControlled ? controlledValue : defaultValue) ?? null);
    const [isOpen, setIsOpen] = useState(false);
    const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const generatedId = useId();
    const inputId = id || generatedId;

    useEffect(() => {
      if (isControlled) setSelectedDate(controlledValue ?? null);
    }, [controlledValue, isControlled]);

    const updatePosition = () => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const popoverHeight = 350;
      const spaceBelow = window.innerHeight - rect.bottom;
      
      let top = rect.bottom + 6;
      if (spaceBelow < popoverHeight && rect.top > popoverHeight) {
        top = Math.max(8, rect.top - popoverHeight - 6);
      }
      
      let left = rect.left;
      const popoverWidth = 320;
      if (left + popoverWidth > window.innerWidth - 16) {
        left = Math.max(16, window.innerWidth - popoverWidth - 16);
      }

      setCoords({ top, left });
    };

    useEffect(() => {
      if (!isOpen) return;
      updatePosition();

      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();

      window.addEventListener('scroll', handleScroll, true);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleResize);
      };
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen) return;
      const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as Node;
        if (
          buttonRef.current &&
          !buttonRef.current.contains(target) &&
          popoverRef.current &&
          !popoverRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };

      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen]);

    const handleSelect = (date?: Date) => {
      const next = date ?? null;
      if (!isControlled) setSelectedDate(next);
      onChange?.(next);
      setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isControlled) setSelectedDate(null);
      onChange?.(null);
    };

    const formattedValue = selectedDate && isValid(selectedDate) ? format(selectedDate, dateFormat) : null;
    const hasError = Boolean(error);
    const buttonClasses = clsx(styles.inputButton, sizeClasses[size], { [styles.error]: hasError });

    const popoverContent = isOpen && typeof document !== 'undefined' ? createPortal(
      <div
        ref={popoverRef}
        className={styles.popover}
        style={{
          top: `${coords.top}px`,
          left: `${coords.left}px`,
        }}
        role="dialog"
        aria-modal="false"
      >
        <DayPicker
          mode="single"
          selected={selectedDate ?? undefined}
          onSelect={handleSelect}
          fromDate={minDate}
          toDate={maxDate}
          className={styles.calendar}
        />
      </div>,
      document.body
    ) : null;

    return (
      <InputWrapper label={label} description={description} error={error} required={required} size={size} disabled={disabled} className={className} style={style}>
        <div className={styles.container}>
          <button
            ref={(node) => {
              buttonRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) (ref as any).current = node;
            }}
            id={inputId}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-invalid={hasError}
            disabled={disabled}
            className={buttonClasses}
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
            {...restProps}
          >
            <span className={formattedValue ? styles.valueText : styles.placeholder}>{formattedValue || placeholder}</span>
            <div className={styles.actions}>
              {clearable && selectedDate && !disabled && (
                <span role="button" tabIndex={0} aria-label="Clear date" className={styles.clearButton} onClick={handleClear}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </span>
              )}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </div>
          </button>
          {popoverContent}
        </div>
      </InputWrapper>
    );
  }
);
DatePicker.displayName = 'DatePicker';
