import React, { forwardRef, useId } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, SemanticColors } from '../../types';
import styles from './Switch.module.css';

export interface SwitchProps extends UniversalProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
  label?: string | React.ReactNode;
  labelPosition?: 'left' | 'right';
  color?: SemanticColors;
  size?: SizeScale;
  description?: string | React.ReactNode;
  error?: string | boolean;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};
const colorClasses: Record<SemanticColors, string> = {
  primary: styles.colorPrimary, secondary: styles.colorSecondary, neutral: styles.colorNeutral,
  success: styles.colorSuccess, warning: styles.colorWarning, danger: styles.colorDanger, info: styles.colorInfo,
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, labelPosition = 'right', color = 'primary', size = 'md', disabled = false, description, error, checked, defaultChecked, className, style, id, onChange, ...restProps }, ref) => {
    const generatedId = useId();
    const switchId = id || generatedId;
    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;

    return (
      <div className={clsx(styles.root, sizeClasses[size], colorClasses[color], className)} style={style}>
        <label htmlFor={switchId} className={clsx(styles.container, { [styles.containerDisabled]: disabled, [styles.labelLeft]: labelPosition === 'left' })}>
          <input ref={ref} id={switchId} type="checkbox" role="switch" aria-checked={checked} aria-invalid={hasError} disabled={disabled} checked={checked} defaultChecked={defaultChecked} className={styles.input} onChange={onChange} {...restProps} />
          <span className={styles.track}><span className={styles.knob} /></span>
          {label && <span className={styles.label}>{label}</span>}
        </label>
        {description && <div className={styles.description}>{description}</div>}
        {hasError && errorMessage && <div className={styles.errorText}>{errorMessage}</div>}
      </div>
    );
  }
);
Switch.displayName = 'Switch';
