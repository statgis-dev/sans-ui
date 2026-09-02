import { CSSProperties } from 'react';
import { DateRange } from 'react-day-picker';
import { default as default_2 } from 'react';
import { ElementType } from 'react';
import { ReactNode } from 'react';

export declare const AspectRatio: default_2.ForwardRefExoticComponent<AspectRatioProps & default_2.RefAttributes<HTMLElement>>;

export declare interface AspectRatioProps extends UniversalProps, default_2.HTMLAttributes<HTMLElement> {
    ratio?: number;
}

export declare const Avatar: default_2.ForwardRefExoticComponent<AvatarProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface AvatarProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLDivElement>, 'color'> {
    src?: string;
    name?: string;
    alt?: string;
    size?: SizeScale | number;
    radius?: RadiusScale;
    color?: SemanticColors | 'auto';
}

export declare const Badge: default_2.ForwardRefExoticComponent<BadgeProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLSpanElement>, 'color'> {
    variant?: BadgeVariant;
    color?: SemanticColors;
    size?: SizeScale;
    radius?: RadiusScale;
    leftSection?: default_2.ReactNode;
}

export declare type BadgeVariant = 'filled' | 'light' | 'outline' | 'dot';

export declare const BasemapToggleControl: default_2.FC<BasemapToggleControlProps>;

export declare interface BasemapToggleControlProps {
    currentBasemap: 'vector' | 'satellite' | string;
    onToggle: () => void;
    size?: SizeScale;
    radius?: RadiusScale;
    className?: string;
    style?: default_2.CSSProperties;
    'aria-label'?: string;
    title?: string;
}

export declare const Box: default_2.ForwardRefExoticComponent<BoxProps & default_2.RefAttributes<HTMLElement>>;

export declare interface BoxProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLElement>, 'color'> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    centered?: boolean;
    bg?: 'app' | 'surface' | 'elevated' | SemanticColors;
    padding?: SpacingScale;
    radius?: RadiusScale;
    border?: boolean;
    shadow?: SizeScale | 'none';
}

export declare const Button: default_2.ForwardRefExoticComponent<ButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends UniversalProps, Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    variant?: ButtonVariant;
    color?: SemanticColors;
    size?: SizeScale;
    radius?: RadiusScale;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    leftSection?: default_2.ReactNode;
    rightSection?: default_2.ReactNode;
}

export declare type ButtonVariant = 'filled' | 'light' | 'outline' | 'subtle' | 'link';

export declare const Card: CardComponent;

export declare const CardBody: default_2.ForwardRefExoticComponent<CardBodyProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardBodyProps extends UniversalProps, default_2.HTMLAttributes<HTMLDivElement> {
}

declare interface CardComponent extends default_2.ForwardRefExoticComponent<CardProps & default_2.RefAttributes<HTMLDivElement>> {
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
}

export declare const CardFooter: default_2.ForwardRefExoticComponent<CardFooterProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardFooterProps extends UniversalProps, default_2.HTMLAttributes<HTMLDivElement> {
}

export declare const CardHeader: default_2.ForwardRefExoticComponent<CardHeaderProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardHeaderProps extends UniversalProps, default_2.HTMLAttributes<HTMLDivElement> {
}

export declare interface CardProps extends UniversalProps, default_2.HTMLAttributes<HTMLDivElement> {
    padding?: SpacingScale;
    radius?: RadiusScale;
    withBorder?: boolean;
    shadow?: SizeScale | 'none';
}

export declare type ColSpan = number | 'auto';

export declare const CompassControl: default_2.FC<CompassControlProps>;

export declare interface CompassControlProps {
    mapId?: string;
    size?: SizeScale;
    radius?: RadiusScale;
    className?: string;
    style?: default_2.CSSProperties;
    'aria-label'?: string;
    title?: string;
}

export declare const Container: default_2.ForwardRefExoticComponent<ContainerProps & default_2.RefAttributes<HTMLElement>>;

export declare interface ContainerProps extends UniversalProps, default_2.HTMLAttributes<HTMLElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
    padding?: SpacingScale;
}

export declare const DatePicker: default_2.ForwardRefExoticComponent<DatePickerProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface DatePickerProps extends UniversalProps, Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
    label?: string | default_2.ReactNode;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
    required?: boolean;
    size?: SizeScale;
    disabled?: boolean;
    value?: Date | null;
    defaultValue?: Date | null;
    placeholder?: string;
    dateFormat?: string;
    clearable?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onChange?: (date: Date | null) => void;
}

export declare const DateRangePicker: default_2.ForwardRefExoticComponent<DateRangePickerProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface DateRangePickerProps extends UniversalProps, Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
    label?: string | default_2.ReactNode;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
    required?: boolean;
    size?: SizeScale;
    disabled?: boolean;
    value?: DateRange | null;
    defaultValue?: DateRange | null;
    placeholder?: string;
    dateFormat?: string;
    clearable?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onChange?: (range: DateRange | null) => void;
}

export declare const DefaultViewControl: default_2.FC<DefaultViewControlProps>;

export declare interface DefaultViewControlProps {
    center?: [number, number];
    zoom?: number;
    pitch?: number;
    bearing?: number;
    mapId?: string;
    size?: SizeScale;
    radius?: RadiusScale;
    className?: string;
    style?: default_2.CSSProperties;
    'aria-label'?: string;
    title?: string;
}

export declare const Divider: default_2.ForwardRefExoticComponent<DividerProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface DividerProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLDivElement>, 'color'> {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    size?: 1 | 2 | 4 | 8;
    color?: SemanticColors | 'border';
    label?: string | default_2.ReactNode;
}

export declare const FullscreenControl: default_2.FC<FullscreenControlProps>;

export declare interface FullscreenControlProps {
    containerRef?: default_2.RefObject<HTMLElement>;
    size?: SizeScale;
    radius?: RadiusScale;
    className?: string;
    style?: default_2.CSSProperties;
    'aria-label'?: string;
    title?: string;
}

export declare const GeolocateControl: default_2.FC<GeolocateControlProps>;

export declare interface GeolocateControlProps {
    zoom?: number;
    mapId?: string;
    size?: SizeScale;
    radius?: RadiusScale;
    onGeolocate?: (coords: GeolocationCoordinates) => void;
    onError?: (error: GeolocationPositionError) => void;
    className?: string;
    style?: default_2.CSSProperties;
    'aria-label'?: string;
    title?: string;
}

export declare const Grid: GridComponent;

export declare const GridCol: default_2.ForwardRefExoticComponent<GridColProps & default_2.RefAttributes<HTMLElement>>;

export declare interface GridColProps extends UniversalProps, default_2.HTMLAttributes<HTMLElement> {
    span?: ColSpan;
    sm?: ColSpan;
    md?: ColSpan;
    lg?: ColSpan;
    xl?: ColSpan;
    offset?: number;
}

declare interface GridComponent extends default_2.ForwardRefExoticComponent<GridProps & default_2.RefAttributes<HTMLElement>> {
    Col: typeof GridCol;
}

export declare interface GridProps extends UniversalProps, default_2.HTMLAttributes<HTMLElement> {
    columns?: number;
    gutter?: SpacingScale;
}

export declare const Group: default_2.ForwardRefExoticComponent<GroupProps & default_2.RefAttributes<HTMLElement>>;

export declare interface GroupProps extends UniversalProps, default_2.HTMLAttributes<HTMLElement> {
    gap?: SpacingScale;
    align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    grow?: boolean;
}

export declare const IconButton: default_2.ForwardRefExoticComponent<IconButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends UniversalProps, Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    icon: default_2.ReactNode;
    'aria-label': string;
    variant?: IconButtonVariant;
    color?: SemanticColors;
    size?: SizeScale;
    radius?: RadiusScale;
    loading?: boolean;
    disabled?: boolean;
}

export declare type IconButtonVariant = 'filled' | 'light' | 'outline' | 'subtle';

declare const Image_2: default_2.ForwardRefExoticComponent<ImageProps & default_2.RefAttributes<HTMLImageElement>>;
export { Image_2 as Image }

export declare type ImageFit = 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';

export declare interface ImageProps extends UniversalProps, Omit<default_2.ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
    src: string;
    alt: string;
    fit?: ImageFit;
    fallback?: default_2.ReactNode;
    radius?: RadiusScale;
    loading?: 'lazy' | 'eager';
}

export declare const InputWrapper: default_2.ForwardRefExoticComponent<InputWrapperProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface InputWrapperProps extends UniversalProps {
    label?: string | default_2.ReactNode;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
    required?: boolean;
    size?: SizeScale;
    disabled?: boolean;
    id?: string;
}

export declare const Loader: default_2.ForwardRefExoticComponent<LoaderProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare interface LoaderProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLSpanElement>, 'color'> {
    variant?: LoaderVariant;
    color?: SemanticColors;
    size?: SizeScale | number;
}

export declare type LoaderVariant = 'spinner' | 'dots' | 'bars';

export declare type MapControlPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export declare const MapControlWrapper: default_2.FC<MapControlWrapperProps>;

export declare interface MapControlWrapperProps {
    position?: MapControlPosition;
    gap?: 'xs' | 'sm' | 'md' | 'lg';
    children: default_2.ReactNode;
    className?: string;
    style?: default_2.CSSProperties;
}

export declare const Modal: default_2.FC<ModalProps>;

export declare interface ModalProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLDivElement>, 'title'> {
    opened: boolean;
    onClose: () => void;
    title?: string | default_2.ReactNode;
    size?: ModalSize;
    centered?: boolean;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    withCloseButton?: boolean;
}

export declare type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export declare const NumberInput: default_2.ForwardRefExoticComponent<NumberInputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface NumberInputProps extends UniversalProps, Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'> {
    label?: string | default_2.ReactNode;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
    required?: boolean;
    size?: SizeScale;
    disabled?: boolean;
    value?: number | '';
    defaultValue?: number | '';
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    hideControls?: boolean;
    onChange?: (value: number | undefined) => void;
}

export declare type RadiusScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export declare const Select: default_2.ForwardRefExoticComponent<SelectProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

export declare interface SelectProps extends UniversalProps, Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
    label?: string | default_2.ReactNode;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
    required?: boolean;
    size?: SizeScale;
    disabled?: boolean;
    data: Array<SelectOption> | string[];
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    searchable?: boolean;
    clearable?: boolean;
    onChange?: (value: string | null) => void;
}

export declare type SemanticColors = 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';

export declare type SizeScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export declare type SpacingScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export declare const Stack: default_2.ForwardRefExoticComponent<StackProps & default_2.RefAttributes<HTMLElement>>;

export declare interface StackProps extends UniversalProps, default_2.HTMLAttributes<HTMLElement> {
    gap?: SpacingScale;
    align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export declare const Switch: default_2.ForwardRefExoticComponent<SwitchProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface SwitchProps extends UniversalProps, Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'> {
    label?: string | default_2.ReactNode;
    labelPosition?: 'left' | 'right';
    color?: SemanticColors;
    size?: SizeScale;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
}

declare const Text_2: default_2.ForwardRefExoticComponent<TextProps & default_2.RefAttributes<HTMLElement>>;
export { Text_2 as Text }

export declare const TextField: default_2.ForwardRefExoticComponent<TextFieldProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface TextFieldProps extends UniversalProps, Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'type'> {
    label?: string | default_2.ReactNode;
    description?: string | default_2.ReactNode;
    error?: string | boolean;
    required?: boolean;
    size?: SizeScale;
    disabled?: boolean;
    type?: TextFieldType;
    leftSection?: default_2.ReactNode;
    rightSection?: default_2.ReactNode;
}

export declare type TextFieldType = 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';

export declare interface TextProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLElement>, 'color'> {
    as?: 'p' | 'span' | 'label' | 'div' | 'small';
    variant?: 'regular' | 'mono' | 'display';
    size?: SizeScale;
    weight?: 400 | 500 | 600 | 700;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    color?: SemanticColors | 'dimmed' | 'inherit';
    align?: 'left' | 'center' | 'right' | 'justify';
    truncate?: boolean | number;
}

export declare type Theme = 'light' | 'dark';

export declare const ThemeContext: default_2.Context<ThemeContextValue | undefined>;

export declare interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    fonts?: ThemeFonts;
    setFonts: (fonts: ThemeFonts | undefined) => void;
}

export declare interface ThemeFonts {
    sans?: string;
    display?: string;
    mono?: string;
}

export declare const ThemeProvider: default_2.FC<ThemeProviderProps>;

export declare interface ThemeProviderProps {
    children: default_2.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    targetElement?: HTMLElement | null;
    fonts?: ThemeFonts;
}

export declare const Title: default_2.ForwardRefExoticComponent<TitleProps & default_2.RefAttributes<HTMLHeadingElement>>;

export declare type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export declare interface TitleProps extends UniversalProps, Omit<default_2.HTMLAttributes<HTMLHeadingElement>, 'color'> {
    order?: TitleOrder;
    size?: TitleSize;
    weight?: 500 | 600 | 700 | 800;
    color?: SemanticColors | 'inherit';
}

export declare type TitleSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export declare const Tooltip: default_2.FC<TooltipProps>;

export declare type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export declare interface TooltipProps extends UniversalProps {
    label: string | default_2.ReactNode;
    children: default_2.ReactElement;
    position?: TooltipPosition;
    openDelay?: number;
    closeDelay?: number;
    withArrow?: boolean;
}

export declare interface UniversalProps {
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export declare function useTheme(): ThemeContextValue;

export declare const ZoomControlGroup: default_2.FC<ZoomControlGroupProps>;

export declare interface ZoomControlGroupProps {
    mapId?: string;
    size?: SizeScale;
    className?: string;
    style?: default_2.CSSProperties;
}

export { }
