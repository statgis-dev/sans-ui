import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SizeScale, SemanticColors } from '../../types';
import styles from './Text.module.css';

export interface TextProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as?: 'p' | 'span' | 'label' | 'div' | 'small';
  variant?: 'regular' | 'mono' | 'display';
  size?: SizeScale;
  weight?: 400 | 500 | 600 | 700;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  color?: SemanticColors | 'dimmed' | 'inherit';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean | number;
}

const sizeClasses: Record<SizeScale, string> = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl,
};
const weightClasses: Record<number, string> = {
  400: styles.weight400, 500: styles.weight500, 600: styles.weight600, 700: styles.weight700,
};
const variantClasses = {
  regular: styles.variantRegular, mono: styles.variantMono, display: styles.variantDisplay,
};
const colorClasses: Record<string, string> = {
  inherit: styles.colorInherit, dimmed: styles.colorDimmed, primary: styles.colorPrimary,
  secondary: styles.colorSecondary, neutral: styles.colorNeutral, success: styles.colorSuccess,
  warning: styles.colorWarning, danger: styles.colorDanger, info: styles.colorInfo,
};
const alignClasses = {
  left: styles.alignLeft, center: styles.alignCenter, right: styles.alignRight, justify: styles.alignJustify,
};

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = 'p', children, variant = 'regular', size = 'md', weight = 400, italic = false, underline = false, strikethrough = false, color = 'inherit', align = 'left', truncate = false, className, style, ...restProps }, ref) => {
    const isSingle = truncate === true;
    const isClamp = typeof truncate === 'number' && truncate >= 1;
    const dynStyle = isClamp ? { ...style, WebkitLineClamp: truncate } as React.CSSProperties : style;
    const cls = clsx(styles.text, variantClasses[variant], sizeClasses[size], weightClasses[weight], colorClasses[color], alignClasses[align], { [styles.italic]: italic, [styles.underline]: underline, [styles.strikethrough]: strikethrough, [styles.truncateSingle]: isSingle, [styles.truncateClamp]: isClamp }, className);
    return <Component ref={ref as any} className={cls} style={dynStyle} {...restProps}>{children}</Component>;
  }
);
Text.displayName = 'Text';
