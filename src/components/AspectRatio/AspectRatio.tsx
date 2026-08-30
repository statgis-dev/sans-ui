import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps } from '../../types';
import styles from './AspectRatio.module.css';

export interface AspectRatioProps extends UniversalProps, React.HTMLAttributes<HTMLElement> {
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLElement, AspectRatioProps>(
  ({ as: Component = 'div', children, ratio = 1, className, style, ...restProps }, ref) => {
    const customStyle = { ...style, '--aspect-ratio': String(ratio) } as React.CSSProperties;
    return <Component ref={ref as any} className={clsx(styles.aspectRatio, className)} style={customStyle} {...restProps}>{children}</Component>;
  }
);
AspectRatio.displayName = 'AspectRatio';
