import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SpacingScale } from '../../types';
import styles from './Group.module.css';

export interface GroupProps extends UniversalProps, React.HTMLAttributes<HTMLElement> {
  gap?: SpacingScale;
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  grow?: boolean;
}

const gapClasses: Record<SpacingScale, string> = {
  none: styles.gapNone, xs: styles.gapXs, sm: styles.gapSm, md: styles.gapMd, lg: styles.gapLg, xl: styles.gapXl, '2xl': styles.gap2Xl,
};
const alignClasses = {
  stretch: styles.alignStretch, 'flex-start': styles.alignFlexStart, center: styles.alignCenter, 'flex-end': styles.alignFlexEnd,
};
const justifyClasses = {
  'flex-start': styles.justifyFlexStart, center: styles.justifyCenter, 'flex-end': styles.justifyFlexEnd, 'space-between': styles.justifySpaceBetween, 'space-around': styles.justifySpaceAround,
};
const wrapClasses = {
  nowrap: styles.wrapNowrap, wrap: styles.wrapWrap, 'wrap-reverse': styles.wrapReverse,
};

export const Group = forwardRef<HTMLElement, GroupProps>(
  ({ as: Component = 'div', children, gap = 'md', align = 'center', justify = 'flex-start', wrap = 'wrap', grow = false, className, style, ...restProps }, ref) => {
    const cls = clsx(styles.group, gapClasses[gap], alignClasses[align], justifyClasses[justify], wrapClasses[wrap], { [styles.grow]: grow }, className);
    return <Component ref={ref as any} className={cls} style={style} {...restProps}>{children}</Component>;
  }
);
Group.displayName = 'Group';
