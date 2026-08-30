import React, { forwardRef, useState, useRef, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import type { SizeScale, UniversalProps } from '../../types';
import { InputWrapper } from '../InputWrapper';
import styles from './Select.module.css';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends UniversalProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
  label?: string | React.ReactNode;
  description?: string | React.ReactNode;
  error?: string | boolean;
  required?: boolean;
  size?: SizeScale;
  disabled?: boolean;
  data: Array<SelectOption> | string[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  searchable?: boolean;
  clearable?: boolean;
  onChange?: (value: string | null) => void;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ label, description, error, required = false, size = 'md', disabled = false, data, value: controlledValue, defaultValue, placeholder = 'Select option...', searchable = false, clearable = false, onChange, className, style, id, ...restProps }, ref) => {
    const isControlled = controlledValue !== undefined;
    const [selectedValue, setSelectedValue] = useState<string | null>((isControlled ? controlledValue : defaultValue) ?? null);
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [coords, setCoords] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 0 });

    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId();
    const selectId = id || generatedId;

    useEffect(() => {
      if (isControlled) setSelectedValue(controlledValue ?? null);
    }, [controlledValue, isControlled]);

    const updatePosition = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = 240;
      const spaceBelow = window.innerHeight - rect.bottom;
      
      let top = rect.bottom + 4;
      if (spaceBelow < dropdownHeight && rect.top > dropdownHeight) {
        top = Math.max(8, rect.top - dropdownHeight - 4);
      }

      setCoords({
        top,
        left: rect.left,
        width: rect.width,
      });
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
          triggerRef.current &&
          !triggerRef.current.contains(target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(target)
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

    useEffect(() => {
      if (isOpen && searchable && searchInputRef.current) searchInputRef.current.focus();
    }, [isOpen, searchable]);

    const normalizedOptions: SelectOption[] = React.useMemo(() => {
      return data.map((item) => (typeof item === 'string' ? { label: item, value: item } : item));
    }, [data]);

    const filteredOptions = React.useMemo(() => {
      if (!searchable || !searchQuery.trim()) return normalizedOptions;
      const q = searchQuery.toLowerCase();
      return normalizedOptions.filter((opt) => opt.label.toLowerCase().includes(q));
    }, [normalizedOptions, searchable, searchQuery]);

    const selectedOption = normalizedOptions.find((opt) => opt.value === selectedValue);

    const handleSelect = (val: string, isDisabled?: boolean) => {
      if (isDisabled) return;
      if (!isControlled) setSelectedValue(val);
      onChange?.(val);
      setIsOpen(false);
      setSearchQuery('');
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isControlled) setSelectedValue(null);
      onChange?.(null);
    };

    const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === 'Escape') setIsOpen(false);
      else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        if (!isOpen) { e.preventDefault(); setIsOpen(true); }
      }
    };

    const hasError = Boolean(error);
    const triggerClasses = clsx(styles.trigger, sizeClasses[size], { [styles.error]: hasError });

    const dropdownContent = isOpen && typeof document !== 'undefined' ? createPortal(
      <div
        ref={dropdownRef}
        className={styles.dropdown}
        role="listbox"
        style={{
          top: `${coords.top}px`,
          left: `${coords.left}px`,
          width: `${coords.width}px`,
        }}
      >
        {searchable && (
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search options..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <div className={styles.optionsList}>
          {filteredOptions.length === 0 ? (
            <div className={styles.emptyState}>No options found</div>
          ) : (
            filteredOptions.map((opt) => {
              const isSelected = opt.value === selectedValue;
              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={opt.disabled}
                  className={clsx(styles.option, {
                    [styles.optionSelected]: isSelected,
                    [styles.optionDisabled]: opt.disabled,
                  })}
                  onClick={() => handleSelect(opt.value, opt.disabled)}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>,
      document.body
    ) : null;

    return (
      <InputWrapper label={label} description={description} error={error} required={required} size={size} disabled={disabled} className={className} style={style}>
        <div className={styles.selectContainer}>
          <button
            ref={(node) => {
              triggerRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) (ref as any).current = node;
            }}
            id={selectId}
            type="button"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-invalid={hasError}
            disabled={disabled}
            className={triggerClasses}
            onClick={() => !disabled && setIsOpen((prev) => !prev)}
            onKeyDown={handleTriggerKeyDown}
            {...restProps}
          >
            <span className={selectedOption ? styles.valueText : styles.placeholder}>{selectedOption ? selectedOption.label : placeholder}</span>
            <div className={styles.actions}>
              {clearable && selectedValue && !disabled && (
                <span role="button" tabIndex={0} aria-label="Clear selection" className={styles.clearButton} onClick={handleClear}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </span>
              )}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={clsx(styles.chevron, { [styles.chevronOpen]: isOpen })}><polyline points="6 9 12 15 18 9" /></svg>
            </div>
          </button>
          {dropdownContent}
        </div>
      </InputWrapper>
    );
  }
);
Select.displayName = 'Select';
