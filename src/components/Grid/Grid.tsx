import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SpacingScale } from '../../types';
import styles from './Grid.module.css';

export interface GridProps extends UniversalProps, React.HTMLAttributes<HTMLElement> {
  columns?: number;
  gutter?: SpacingScale;
}

export type ColSpan = number | 'auto';

export interface GridColProps extends UniversalProps, React.HTMLAttributes<HTMLElement> {
  span?: ColSpan;
  sm?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  xl?: ColSpan;
  offset?: number;
}

const gutterClasses: Record<SpacingScale, string> = {
  none: styles.gutterNone, xs: styles.gutterXs, sm: styles.gutterSm, md: styles.gutterMd, lg: styles.gutterLg, xl: styles.gutterXl, '2xl': styles.gutter2Xl,
};

const spanClassMap: Record<string, string> = {
  auto: styles.spanAuto, 1: styles.span1, 2: styles.span2, 3: styles.span3, 4: styles.span4,
  5: styles.span5, 6: styles.span6, 7: styles.span7, 8: styles.span8, 9: styles.span9,
  10: styles.span10, 11: styles.span11, 12: styles.span12,
};
const spanSmClassMap: Record<string, string> = {
  auto: styles.spanSmAuto, 1: styles.spanSm1, 2: styles.spanSm2, 3: styles.spanSm3, 4: styles.spanSm4,
  5: styles.spanSm5, 6: styles.spanSm6, 7: styles.spanSm7, 8: styles.spanSm8, 9: styles.spanSm9,
  10: styles.spanSm10, 11: styles.spanSm11, 12: styles.spanSm12,
};
const spanMdClassMap: Record<string, string> = {
  auto: styles.spanMdAuto, 1: styles.spanMd1, 2: styles.spanMd2, 3: styles.spanMd3, 4: styles.spanMd4,
  5: styles.spanMd5, 6: styles.spanMd6, 7: styles.spanMd7, 8: styles.spanMd8, 9: styles.spanMd9,
  10: styles.spanMd10, 11: styles.spanMd11, 12: styles.spanMd12,
};
const spanLgClassMap: Record<string, string> = {
  auto: styles.spanLgAuto, 1: styles.spanLg1, 2: styles.spanLg2, 3: styles.spanLg3, 4: styles.spanLg4,
  5: styles.spanLg5, 6: styles.spanLg6, 7: styles.spanLg7, 8: styles.spanLg8, 9: styles.spanLg9,
  10: styles.spanLg10, 11: styles.spanLg11, 12: styles.spanLg12,
};
const spanXlClassMap: Record<string, string> = {
  auto: styles.spanXlAuto, 1: styles.spanXl1, 2: styles.spanXl2, 3: styles.spanXl3, 4: styles.spanXl4,
  5: styles.spanXl5, 6: styles.spanXl6, 7: styles.spanXl7, 8: styles.spanXl8, 9: styles.spanXl9,
  10: styles.spanXl10, 11: styles.spanXl11, 12: styles.spanXl12,
};
const offsetClassMap: Record<number, string> = {
  1: styles.offset1, 2: styles.offset2, 3: styles.offset3, 4: styles.offset4, 5: styles.offset5,
  6: styles.offset6, 7: styles.offset7, 8: styles.offset8, 9: styles.offset9, 10: styles.offset10, 11: styles.offset11,
};

export const GridCol = forwardRef<HTMLElement, GridColProps>(
  ({ as: Component = 'div', children, span = 12, sm, md, lg, xl, offset = 0, className, style, ...restProps }, ref) => {
    const cls = clsx(styles.col, spanClassMap[String(span)], sm && spanSmClassMap[String(sm)], md && spanMdClassMap[String(md)], lg && spanLgClassMap[String(lg)], xl && spanXlClassMap[String(xl)], offset > 0 && offsetClassMap[offset], className);
    return <Component ref={ref as any} className={cls} style={style} {...restProps}>{children}</Component>;
  }
);
GridCol.displayName = 'Grid.Col';

interface GridComponent extends React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLElement>> {
  Col: typeof GridCol;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ as: Component = 'div', children, columns = 12, gutter = 'md', className, style, ...restProps }, ref) => {
    const customStyle = { ...style, gridTemplateColumns: 'repeat(' + columns + ', minmax(0, 1fr))' };
    const cls = clsx(styles.grid, gutterClasses[gutter], className);
    return <Component ref={ref as any} className={cls} style={customStyle} {...restProps}>{children}</Component>;
  }
) as GridComponent;
Grid.displayName = 'Grid';
Grid.Col = GridCol;
