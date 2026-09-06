import React, { forwardRef, cloneElement, isValidElement } from 'react';
import { usePopoverContext } from './PopoverContext';

export interface PopoverTargetProps {
  children: React.ReactElement;
  ref?: React.Ref<HTMLElement>;
}

export const PopoverTarget = forwardRef<HTMLElement, PopoverTargetProps>(
  ({ children }, ref) => {
    const { opened, toggle, targetRef, popoverId } = usePopoverContext();

    if (!isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<any>;

    return cloneElement(child, {
      ref: (node: HTMLElement | null) => {
        targetRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref && 'current' in ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }

        const childRef = (child as any).ref;
        if (typeof childRef === 'function') {
          childRef(node);
        } else if (childRef && 'current' in childRef) {
          childRef.current = node;
        }
      },
      'aria-haspopup': 'dialog',
      'aria-expanded': opened,
      'aria-controls': popoverId,
      onClick: (e: React.MouseEvent) => {
        child.props?.onClick?.(e);
        toggle();
      },
    });
  }
);
PopoverTarget.displayName = 'Popover.Target';
