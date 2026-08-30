import React, { useState, useRef, cloneElement, isValidElement, useId } from 'react';
import clsx from 'clsx';
import type { UniversalProps } from '../../types';
import styles from './Tooltip.module.css';

export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends UniversalProps {
  label: string | React.ReactNode;
  children: React.ReactElement;
  position?: TooltipPosition;
  openDelay?: number;
  closeDelay?: number;
  withArrow?: boolean;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: styles.posTop, bottom: styles.posBottom, left: styles.posLeft, right: styles.posRight,
};

export const Tooltip: React.FC<TooltipProps> = ({
  label, children, position = 'top', openDelay = 0, closeDelay = 0, withArrow = true, className, style,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const tooltipId = useId();

  const handleOpen = () => {
    if (closeTimer.current) { window.clearTimeout(closeTimer.current); closeTimer.current = null; }
    if (openDelay > 0) openTimer.current = window.setTimeout(() => setIsVisible(true), openDelay);
    else setIsVisible(true);
  };

  const handleClose = () => {
    if (openTimer.current) { window.clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeDelay > 0) closeTimer.current = window.setTimeout(() => setIsVisible(false), closeDelay);
    else setIsVisible(false);
  };

  if (!isValidElement(children)) return children;

  const childElement = children as React.ReactElement<any>;
  const child = cloneElement(childElement, {
    onMouseEnter: (e: React.MouseEvent) => { childElement.props?.onMouseEnter?.(e); handleOpen(); },
    onMouseLeave: (e: React.MouseEvent) => { childElement.props?.onMouseLeave?.(e); handleClose(); },
    onFocus: (e: React.FocusEvent) => { childElement.props?.onFocus?.(e); handleOpen(); },
    onBlur: (e: React.FocusEvent) => { childElement.props?.onBlur?.(e); handleClose(); },
    'aria-describedby': isVisible ? tooltipId : undefined,
  });

  return (
    <span className={styles.wrapper}>
      {child}
      {isVisible && (
        <span id={tooltipId} role="tooltip" className={clsx(styles.tooltip, positionClasses[position], className)} style={style}>
          {label}
          {withArrow && <span className={styles.arrow} aria-hidden="true" />}
        </span>
      )}
    </span>
  );
};
Tooltip.displayName = 'Tooltip';
