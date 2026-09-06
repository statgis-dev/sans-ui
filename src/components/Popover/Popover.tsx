import React, { useState, useRef, useId, useMemo } from 'react';
import type { SizeScale, RadiusScale, UniversalProps } from '../../types';
import { PopoverContext, type PopoverPosition, type PopoverContextValue } from './PopoverContext';
import { PopoverTarget, type PopoverTargetProps } from './PopoverTarget';
import { PopoverDropdown, type PopoverDropdownProps } from './PopoverDropdown';

export interface PopoverProps extends UniversalProps {
  children: React.ReactNode;
  opened?: boolean;
  defaultOpened?: boolean;
  onChange?: (opened: boolean) => void;
  position?: PopoverPosition;
  offset?: number;
  withArrow?: boolean;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  shadow?: SizeScale;
  radius?: RadiusScale;
  id?: string;
}

export interface PopoverComponent extends React.FC<PopoverProps> {
  Target: typeof PopoverTarget;
  Dropdown: typeof PopoverDropdown;
}

export const Popover: PopoverComponent = ({
  children,
  opened: controlledOpened,
  defaultOpened = false,
  onChange,
  position = 'bottom-start',
  offset = 8,
  withArrow = false,
  closeOnClickOutside = true,
  closeOnEscape = true,
  shadow = 'md',
  radius = 'md',
  id,
}) => {
  const isControlled = controlledOpened !== undefined;
  const [uncontrolledOpened, setUncontrolledOpened] = useState(defaultOpened);
  const opened = isControlled ? controlledOpened : uncontrolledOpened;

  const targetRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const generatedId = useId();
  const popoverId = id || generatedId;

  const setOpened = (nextOpened: boolean) => {
    if (!isControlled) {
      setUncontrolledOpened(nextOpened);
    }
    onChange?.(nextOpened);
  };

  const toggle = () => setOpened(!opened);
  const open = () => setOpened(true);
  const close = () => setOpened(false);

  const contextValue: PopoverContextValue = useMemo(
    () => ({
      opened,
      setOpened,
      toggle,
      close,
      open,
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
    }),
    [
      opened,
      position,
      offset,
      withArrow,
      closeOnClickOutside,
      closeOnEscape,
      shadow,
      radius,
      popoverId,
    ]
  );

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
};

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = 'Popover';
