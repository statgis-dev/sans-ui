import React, { forwardRef, useEffect, useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import type { UniversalProps } from '../../types';
import { usePopoverContext, type PopoverPosition } from './PopoverContext';
import styles from './Popover.module.css';

export interface PopoverDropdownProps extends UniversalProps, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const shadowClasses: Record<string, string> = {
  xs: styles.shadowXs,
  sm: styles.shadowSm,
  md: styles.shadowMd,
  lg: styles.shadowLg,
  xl: styles.shadowXl,
};

const radiusClasses: Record<string, string> = {
  none: styles.radiusNone,
  xs: styles.radiusXs,
  sm: styles.radiusSm,
  md: styles.radiusMd,
  lg: styles.radiusLg,
  xl: styles.radiusXl,
  full: styles.radiusFull,
};

export const PopoverDropdown = forwardRef<HTMLDivElement, PopoverDropdownProps>(
  ({ children, className, style, ...restProps }, ref) => {
    const {
      opened,
      close,
      position,
      offset,
      withArrow,
      closeOnClickOutside,
      closeOnEscape,
      shadow,
      radius,
      targetRef,
      dropdownRef,
      popoverId,
    } = usePopoverContext();

    const [coords, setCoords] = useState<{ top: number; left: number }>({ top: -9999, left: -9999 });
    const [actualPosition, setActualPosition] = useState<PopoverPosition>(position);
    const [arrowCoords, setArrowCoords] = useState<{ top?: number; left?: number; right?: number; bottom?: number }>({});
    const localRef = useRef<HTMLDivElement | null>(null);

    const updatePosition = useCallback(() => {
      if (!targetRef.current || !localRef.current) return;

      const targetRect = targetRef.current.getBoundingClientRect();
      const dropdownRect = localRef.current.getBoundingClientRect();
      const dropdownWidth = dropdownRect.width;
      const dropdownHeight = dropdownRect.height;
      const totalOffset = offset + (withArrow ? 4 : 0);

      let primarySide = position.split('-')[0] as 'top' | 'bottom' | 'left' | 'right';
      let alignment = position.split('-')[1] as 'start' | 'end' | undefined;

      // Check collision and flip if necessary
      const spaceAbove = targetRect.top;
      const spaceBelow = window.innerHeight - targetRect.bottom;
      const spaceLeft = targetRect.left;
      const spaceRight = window.innerWidth - targetRect.right;

      if (primarySide === 'bottom' && spaceBelow < dropdownHeight + totalOffset && spaceAbove > dropdownHeight + totalOffset) {
        primarySide = 'top';
      } else if (primarySide === 'top' && spaceAbove < dropdownHeight + totalOffset && spaceBelow > dropdownHeight + totalOffset) {
        primarySide = 'bottom';
      } else if (primarySide === 'right' && spaceRight < dropdownWidth + totalOffset && spaceLeft > dropdownWidth + totalOffset) {
        primarySide = 'left';
      } else if (primarySide === 'left' && spaceLeft < dropdownWidth + totalOffset && spaceRight > dropdownWidth + totalOffset) {
        primarySide = 'right';
      }

      let top = 0;
      let left = 0;

      if (primarySide === 'top' || primarySide === 'bottom') {
        top = primarySide === 'top' ? targetRect.top - dropdownHeight - totalOffset : targetRect.bottom + totalOffset;

        if (alignment === 'start') {
          left = targetRect.left;
        } else if (alignment === 'end') {
          left = targetRect.right - dropdownWidth;
        } else {
          left = targetRect.left + (targetRect.width - dropdownWidth) / 2;
        }
      } else {
        left = primarySide === 'left' ? targetRect.left - dropdownWidth - totalOffset : targetRect.right + totalOffset;

        if (alignment === 'start') {
          top = targetRect.top;
        } else if (alignment === 'end') {
          top = targetRect.bottom - dropdownHeight;
        } else {
          top = targetRect.top + (targetRect.height - dropdownHeight) / 2;
        }
      }

      // Viewport clamping (keep 8px boundary)
      const maxLeft = window.innerWidth - dropdownWidth - 8;
      const maxTop = window.innerHeight - dropdownHeight - 8;
      left = Math.max(8, Math.min(left, maxLeft));
      top = Math.max(8, Math.min(top, maxTop));

      // Calculate arrow offset relative to dropdown
      if (withArrow) {
        if (primarySide === 'top' || primarySide === 'bottom') {
          const targetCenter = targetRect.left + targetRect.width / 2;
          const arrowLeft = Math.max(12, Math.min(targetCenter - left - 5, dropdownWidth - 22));
          setArrowCoords({ left: arrowLeft });
        } else {
          const targetCenter = targetRect.top + targetRect.height / 2;
          const arrowTop = Math.max(12, Math.min(targetCenter - top - 5, dropdownHeight - 22));
          setArrowCoords({ top: arrowTop });
        }
      }

      const calculatedPos = (alignment ? `${primarySide}-${alignment}` : primarySide) as PopoverPosition;
      setActualPosition(calculatedPos);
      setCoords({ top, left });
    }, [position, offset, withArrow, targetRef]);

    useEffect(() => {
      if (!opened) return;
      updatePosition();

      const handleResize = () => updatePosition();
      const handleScroll = () => updatePosition();

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }, [opened, updatePosition]);

    // Click outside listener
    useEffect(() => {
      if (!opened || !closeOnClickOutside) return;

      const handlePointerDown = (event: MouseEvent | TouchEvent) => {
        const target = event.target as Node;
        if (
          targetRef.current?.contains(target) ||
          localRef.current?.contains(target)
        ) {
          return;
        }
        close();
      };

      document.addEventListener('mousedown', handlePointerDown);
      document.addEventListener('touchstart', handlePointerDown);

      return () => {
        document.removeEventListener('mousedown', handlePointerDown);
        document.removeEventListener('touchstart', handlePointerDown);
      };
    }, [opened, closeOnClickOutside, close, targetRef]);

    // Escape key listener
    useEffect(() => {
      if (!opened || !closeOnEscape) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          close();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [opened, closeOnEscape, close]);

    if (!opened) return null;

    const basePrimary = actualPosition.split('-')[0];
    const arrowSideClass =
      basePrimary === 'top'
        ? styles.arrowTop
        : basePrimary === 'bottom'
        ? styles.arrowBottom
        : basePrimary === 'left'
        ? styles.arrowLeft
        : styles.arrowRight;

    const dropdownElement = (
      <div
        ref={(node) => {
          localRef.current = node;
          dropdownRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref && 'current' in ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
        }}
        id={popoverId}
        role="dialog"
        aria-modal="false"
        className={clsx(
          styles.dropdown,
          shadowClasses[shadow] || styles.shadowMd,
          radiusClasses[radius] || styles.radiusMd,
          className
        )}
        style={{
          position: 'fixed',
          top: `${coords.top}px`,
          left: `${coords.left}px`,
          ...style,
        }}
        {...restProps}
      >
        {children}
        {withArrow && (
          <span
            className={clsx(styles.arrow, arrowSideClass)}
            style={arrowCoords}
            aria-hidden="true"
          />
        )}
      </div>
    );

    if (typeof document === 'undefined') return null;
    return createPortal(dropdownElement, document.body);
  }
);
PopoverDropdown.displayName = 'Popover.Dropdown';
