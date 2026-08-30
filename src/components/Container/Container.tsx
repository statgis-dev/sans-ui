import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SpacingScale } from '../../types';
import styles from './Container.module.css';

export interface ContainerProps extends UniversalProps, React.HTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
  padding?: SpacingScale;
}

const sizeClasses = {
  xs: styles.sizeXs, sm: styles.sizeSm, md: styles.sizeMd, lg: styles.sizeLg, xl: styles.sizeXl, fluid: styles.sizeFluid,
};
const paddingClasses: Record<SpacingScale, string> = {
  none: styles.padNone, xs: styles.padXs, sm: styles.padSm, md: styles.padMd, lg: styles.padLg, xl: styles.padXl, '2xl': styles.pad2Xl,
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as: Component = 'div', children, size = 'md', padding = 'md', className, style, ...restProps }, ref) => {
    const cls = clsx(styles.container, sizeClasses[size], paddingClasses[padding], className);
    return <Component ref={ref as any} className={cls} style={style} {...restProps}>{children}</Component>;
  }
);
Container.displayName = 'Container';
