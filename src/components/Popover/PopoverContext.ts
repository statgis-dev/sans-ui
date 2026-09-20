import { createContext, useContext } from 'react';
import type { SizeScale, RadiusScale } from '../../types';

export type PopoverPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

export interface PopoverContextValue {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  toggle: () => void;
  close: () => void;
  open: () => void;
  position: PopoverPosition;
  offset: number;
  withArrow: boolean;
  closeOnClickOutside: boolean;
  closeOnEscape: boolean;
  shadow: SizeScale;
  radius: RadiusScale;
  targetRef: React.MutableRefObject<HTMLElement | null>;
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  popoverId: string;
}

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export function usePopoverContext(): PopoverContextValue {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('Popover compound components must be used within a <Popover> root component');
  }
  return context;
}
