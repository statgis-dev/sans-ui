import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SemanticColors } from '../../types';
import styles from './Title.module.css';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends UniversalProps, Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> {
  order?: TitleOrder;
  size?: TitleSize;
  weight?: 500 | 600 | 700 | 800;
  color?: SemanticColors | 'inherit';
}

const sizeClasses: Record<TitleSize, string> = {
  h1: styles.sizeH1, h2: styles.sizeH2, h3: styles.sizeH3, h4: styles.sizeH4, h5: styles.sizeH5, h6: styles.sizeH6,
};
const weightClasses: Record<number, string> = {
  500: styles.weight500, 600: styles.weight600, 700: styles.weight700, 800: styles.weight800,
};
const colorClasses: Record<string, string> = {
  inherit: styles.colorInherit, primary: styles.colorPrimary, secondary: styles.colorSecondary,
  neutral: styles.colorNeutral, success: styles.colorSuccess, warning: styles.colorWarning,
  danger: styles.colorDanger, info: styles.colorInfo,
};

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, order = 1, size, weight = 700, color = 'inherit', className, style, ...restProps }, ref) => {
    const Tag = ('h' + order) as React.ElementType;
    const visualSize: TitleSize = size || (('h' + order) as TitleSize);
    const cls = clsx(styles.title, sizeClasses[visualSize], weightClasses[weight], colorClasses[color], className);
    return <Tag ref={ref} className={cls} style={style} {...restProps}>{children}</Tag>;
  }
);
Title.displayName = 'Title';
