import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SpacingScale } from '../../types';
import styles from './Stack.module.css';

export interface StackProps extends UniversalProps, React.HTMLAttributes<HTMLElement> {
  gap?: SpacingScale;
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

const gapClasses: Record<SpacingScale, string> = {
  none: styles.gapNone, xs: styles.gapXs, sm: styles.gapSm, md: styles.gapMd, lg: styles.gapLg, xl: styles.gapXl, '2xl': styles.gap2Xl,
};
const alignClasses = {
  stretch: styles.alignStretch, 'flex-start': styles.alignFlexStart, center: styles.alignCenter, 'flex-end': styles.alignFlexEnd,
};
const justifyClasses = {
  'flex-start': styles.justifyFlexStart, center: styles.justifyCenter, 'flex-end': styles.justifyFlexEnd, 'space-between': styles.justifySpaceBetween,
};

export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ as: Component = 'div', children, gap = 'md', align = 'stretch', justify = 'flex-start', className, style, ...restProps }, ref) => {
    const cls = clsx(styles.stack, gapClasses[gap], alignClasses[align], justifyClasses[justify], className);
    return <Component ref={ref as any} className={cls} style={style} {...restProps}>{children}</Component>;
  }
);
Stack.displayName = 'Stack';
