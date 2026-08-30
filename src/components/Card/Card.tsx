import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { UniversalProps, SpacingScale, RadiusScale, SizeScale } from '../../types';
import styles from './Card.module.css';

export interface CardProps extends UniversalProps, React.HTMLAttributes<HTMLDivElement> {
  padding?: SpacingScale;
  radius?: RadiusScale;
  withBorder?: boolean;
  shadow?: SizeScale | 'none';
}

export interface CardHeaderProps extends UniversalProps, React.HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends UniversalProps, React.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends UniversalProps, React.HTMLAttributes<HTMLDivElement> {}

const paddingClasses: Record<SpacingScale, string> = {
  none: styles.padNone, xs: styles.padXs, sm: styles.padSm, md: styles.padMd, lg: styles.padLg, xl: styles.padXl, '2xl': styles.pad2Xl,
};
const radiusClasses: Record<RadiusScale, string> = {
  none: styles.radiusNone, xs: styles.radiusXs, sm: styles.radiusSm, md: styles.radiusMd, lg: styles.radiusLg, xl: styles.radiusXl, full: styles.radiusFull,
};
const shadowClasses: Record<string, string> = {
  none: styles.shadowNone, xs: styles.shadowXs, sm: styles.shadowSm, md: styles.shadowMd, lg: styles.shadowLg, xl: styles.shadowXl,
};

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, style, ...restProps }, ref) => <div ref={ref} className={clsx(styles.header, className)} style={style} {...restProps}>{children}</div>
);
CardHeader.displayName = 'Card.Header';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, style, ...restProps }, ref) => <div ref={ref} className={clsx(styles.body, className)} style={style} {...restProps}>{children}</div>
);
CardBody.displayName = 'Card.Body';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, style, ...restProps }, ref) => <div ref={ref} className={clsx(styles.footer, className)} style={style} {...restProps}>{children}</div>
);
CardFooter.displayName = 'Card.Footer';

interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ as: Component = 'div', children, padding = 'md', radius = 'md', withBorder = true, shadow = 'sm', className, style, ...restProps }, ref) => {
    const cls = clsx(styles.card, padding && paddingClasses[padding], radius && radiusClasses[radius], shadow && shadowClasses[shadow], { [styles.withBorder]: withBorder }, className);
    return <Component ref={ref as any} className={cls} style={style} {...restProps}>{children}</Component>;
  }
) as CardComponent;
Card.displayName = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
