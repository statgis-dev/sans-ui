import type { ElementType, CSSProperties, ReactNode } from 'react';

export type SizeScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpacingScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type RadiusScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type SemanticColors = 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export interface UniversalProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
