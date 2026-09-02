# sans-ui

> A standalone, high-performance React UI component library engineered with strict TypeScript, modular CSS Modules, bundled local typography, and dynamic CSS custom property theming.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-^18.0.0-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/Styling-CSS%20Modules-black.svg)](https://github.com/css-modules/css-modules)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#license)

---

## Table of Contents

- [Overview & Purpose](#overview--purpose)
- [Key Features](#key-features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Theme Engine & Tokens](#theme-engine--tokens)
  - [ThemeProvider](#themeprovider)
  - [useTheme Hook](#usetheme-hook)
  - [Design Tokens Scales](#design-tokens-scales)
- [Component Catalog (30 Components)](#component-catalog)
  - [1. Typography & Base](#1-typography--base)
    - [Text](#text)
    - [Title](#title)
    - [Divider](#divider)
  - [2. Structure & Layout](#2-structure--layout)
    - [Box](#box)
    - [Stack](#stack)
    - [Group](#group)
    - [Grid & Grid.Col](#grid--gridcol)
    - [AspectRatio](#aspectratio)
    - [Container](#container)
  - [3. Actions & Navigation](#3-actions--navigation)
    - [Button](#button)
    - [IconButton](#iconbutton)
  - [4. Forms & Data Capture](#4-forms--data-capture)
    - [InputWrapper](#inputwrapper)
    - [TextField](#textfield)
    - [NumberInput](#numberinput)
    - [Select](#select)
    - [Switch](#switch)
    - [DatePicker](#datepicker)
    - [DateRangePicker](#daterangepicker)
  - [5. Media & Data Display](#5-media--data-display)
    - [Avatar](#avatar)
    - [Image](#image)
    - [Badge](#badge)
    - [Card (Compound)](#card)
  - [6. Overlays & Feedback](#6-overlays--feedback)
    - [Modal](#modal)
    - [Tooltip](#tooltip)
    - [Loader](#loader)
  - [7. Map Controls & Overlays](#7-map-controls--overlays)
    - [DefaultViewControl](#defaultviewcontrol)
    - [GeolocateControl](#geolocatecontrol)
    - [ZoomControlGroup](#zoomcontrolgroup)
    - [BasemapToggleControl](#basemaptogglecontrol)
    - [CompassControl](#compasscontrol)
    - [FullscreenControl](#fullscreencontrol)
    - [MapControlWrapper](#mapcontrolwrapper)
- [Development & Sandbox](#development--sandbox)
- [License](#license)

---

## Overview & Purpose

**`sans-ui`** was created to solve common pitfalls in modern web UI engineering: runtime CSS-in-JS performance bottlenecks, external web-font layout shift (FOUT/FOIT), brittle type hierarchies, and popup clipping issues in nested container layouts.

### Why sans-ui?
- **Zero Runtime CSS Overhead**: Styled entirely via pure CSS Modules and standard CSS Custom Properties (`var(--...)`).
- **Zero External Network Dependencies**: Local font files (`@fontsource/lato`, `@fontsource/poppins`, `@fontsource/jetbrains-mono`) are bundled directly into `sans-ui/style.css`.
- **Strict Accessibility & Ergonomics**: Built with ARIA semantics, WCAG-compliant contrast ratios, keyboard navigation (`Escape`, arrows, focus rings), and React 18 createPortal-based floating overlays that never clip inside parent overflow boundaries.
- **Universal Polymorphism**: Primitives support the `as` prop (`div`, `span`, `section`, `article`, `p`, etc.) without sacrificing TypeScript autocompletion.

---

## Installation

Install `sans-ui` and its peer dependencies using your preferred package manager:

```bash
# npm
npm install sans-ui react react-dom

# yarn
yarn add sans-ui react react-dom

# pnpm
pnpm add sans-ui react react-dom
```

---

## Quick Start

### 1. Import Global Styles
Import the unified style bundle once at the root entry of your project (e.g. `main.tsx` or `App.tsx`):

```tsx
import 'sans-ui/style.css';
```

### 2. Wrap with `ThemeProvider`
Provide global theming context and automatic `data-theme` attribute management:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, Button, Title, Stack, Card } from 'sans-ui';
import 'sans-ui/style.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Card withBorder shadow="md" style={{ maxWidth: 480, margin: '40px auto' }}>
        <Card.Header>
          <Title order={2} size="h3" color="primary">Welcome to sans-ui</Title>
        </Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Text size="md">A robust, type-safe React UI library.</Text>
            <Button color="primary" variant="filled">Get Started</Button>
          </Stack>
        </Card.Body>
      </Card>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

---

## Theme Engine & System Customization (`ThemeConfig`)

`sans-ui` features a dynamic, zero-runtime-overhead theming engine powered by standard CSS Custom Properties (`var(--...)`). Consuming applications can customize the entire design system either statically at initialization via `ThemeProvider` props or dynamically at runtime using the `useTheme` hook.

---

### 1. `ThemeProvider` Setup

Wrap your application tree in `ThemeProvider` and pass a `config` object to customize colors, radii, density, elevation, typography scales, and fonts:

```tsx
import React from 'react';
import { ThemeProvider, type ThemeConfig } from 'sans-ui';
import 'sans-ui/style.css';

const customTheme: ThemeConfig = {
  colors: {
    primary: '#6366F1',   // Indigo brand color - auto-generates 100-900 ramp + focus ring
    secondary: '#005F96',
  },
  radius: 'rounded',       // 'sharp' | 'balanced' | 'rounded' | 'pill'
  density: 'comfortable',  // 'compact' | 'comfortable' | 'spacious'
  elevation: 'subtle',     // 'flat' | 'subtle' | 'high-contrast'
  fontScale: 'md',         // 'sm' (14px) | 'md' (16px) | 'lg' (18px)
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    display: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
};

export function Root() {
  return (
    <ThemeProvider defaultTheme="light" config={customTheme}>
      <App />
    </ThemeProvider>
  );
}
```

#### `ThemeProvider` Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `defaultTheme` | `'light' | 'dark'` | `'light'` | Initial theme fallback if no stored theme is found in `localStorage`. |
| `storageKey` | `string` | `'sans-ui-theme'` | Key used in `localStorage` for light/dark theme persistence. |
| `targetElement` | `HTMLElement | null` | `document.documentElement` | Target DOM element where `data-theme` and CSS variables are injected. |
| `config` | `ThemeConfig` | — | Complete system token customization object. |
| `fonts` | `ThemeFonts` | — | Shorthand typography font families override (alternative to `config.fonts`). |
| `children` | `ReactNode` | — | Child component tree. |

---

### 2. Detailed `ThemeConfig` Options Breakdown

The `ThemeConfig` interface controls all visual and structural aspects of `sans-ui`:

```ts
export interface ThemeConfig {
  colors?: ThemeColorsConfig;
  radius?: RadiusPreset;
  elevation?: ElevationPreset;
  density?: DensityMode;
  fontScale?: FontScale;
  fonts?: ThemeFonts;
}
```

---

#### A. `colors` (`ThemeColorsConfig`)
Allows setting brand colors using standard HEX strings. `sans-ui` mathematically generates a 9-step luminance ramp (100–900) plus an accessible focus ring:

```ts
export interface ThemeColorsConfig {
  primary?: string;   // Single HEX code (e.g. "#00B5D9" or "#6366F1")
  secondary?: string; // Single HEX code (e.g. "#005F96" or "#EC4899")
}
```

* **Primary Ramp Generation (`colors.primary`):**
  When a HEX code is provided, `generateColorRamp(hex)` maps it to step `500` and computes:
  * `--color-primary-100`: Ultra-light tint for subtle badges, light buttons, and active middle ranges.
  * `--color-primary-200` & `--color-primary-300`: Soft fills for hover states and selection backgrounds.
  * `--color-primary-500`: Base brand color for primary filled buttons, switches, active date indicators, and badges.
  * `--color-primary-600` & `--color-primary-700`: Darker shades for hover and active pressed states.
  * `--color-primary-800` & `--color-primary-900`: Deep contrast tones.
  * `--border-focus` & `--shadow-focus`: Semi-transparent focus ring (`0 0 0 3px rgba(r, g, b, 0.35)`) guaranteeing WCAG 2.1 compliance.
* **Secondary Ramp Generation (`colors.secondary`):**
  Injects `--color-secondary-100` through `--color-secondary-900`.

---

#### B. `radius` (`RadiusPreset`)
Controls the global corner curvature across buttons, text fields, selects, date pickers, cards, badges, and modals:

| Preset | Description | Sample Token Values | Best For |
| :--- | :--- | :--- | :--- |
| **`'sharp'`** | Zero/minimal rounding for strict, compact rectangular interfaces. | `--radius-xs: 0px`<br>`--radius-sm: 2px`<br>`--radius-md: 4px`<br>`--radius-lg: 6px` | IDEs, financial terminals, dense tables, brutalist UI. |
| **`'balanced'`** *(Default)* | Subtle, modern curvature. | `--radius-xs: 4px`<br>`--radius-sm: 6px`<br>`--radius-md: 10px`<br>`--radius-lg: 16px` | Enterprise SaaS, dashboards, administrative portals. |
| **`'rounded'`** | Friendly, soft rounded corners with prominent visual curves. | `--radius-xs: 6px`<br>`--radius-sm: 10px`<br>`--radius-md: 16px`<br>`--radius-lg: 24px` | Consumer web apps, mobile-first designs, marketing tools. |
| **`'pill'`** | Fully rounded capsule/pill shape for buttons and inputs. | `--radius-xs: 4px`<br>`--radius-sm: 9999px`<br>`--radius-md: 9999px`<br>`--radius-lg: 20px` | Social apps, creative suites, conversational interfaces. |

---

#### C. `density` (`DensityMode`)
Modulates the baseline padding and layout spacing scale (`--spacing-*`) across containers, stacks, groups, and form fields:

| Mode | Token Multipliers | Baseline Gap / Padding | Use Case |
| :--- | :--- | :--- | :--- |
| **`'compact'`** | Scaled down by ~50% | `--spacing-xs: 2px`<br>`--spacing-sm: 4px`<br>`--spacing-md: 8px`<br>`--spacing-lg: 16px` | High-density spreadsheets, sidebars, data-heavy views. |
| **`'comfortable'`** *(Default)* | Standard ergonomic baseline | `--spacing-xs: 4px`<br>`--spacing-sm: 8px`<br>`--spacing-md: 16px`<br>`--spacing-lg: 24px` | Standard web applications, forms, content management. |
| **`'spacious'`** | Scaled up by ~50% | `--spacing-xs: 6px`<br>`--spacing-sm: 12px`<br>`--spacing-md: 24px`<br>`--spacing-lg: 36px` | Marketing pages, touch tablets, presentation views. |

---

#### D. `elevation` (`ElevationPreset`)
Adjusts depth perception and multi-layer box shadows (`--shadow-*`):

| Preset | Shadow Multiplier | Visual Behavior |
| :--- | :--- | :--- |
| **`'flat'`** | `none` | Strips all box-shadows (`--shadow-xs` through `--shadow-xl: none`). Renders pure flat 2D surfaces with crisp 1px borders. |
| **`'subtle'`** *(Default)* | Multi-layer ambient | Soft ambient diffusion with gentle low-contrast shadows for natural depth. |
| **`'high-contrast'`** | Deep opacity & offset | Increased shadow opacity and vertical displacement for sharp elevation separation over busy backgrounds. |

---

#### E. `fontScale` (`FontScale`)
Adjusts the root typography size tokens across all modular text steps (`--font-size-*`) and headings (`--font-size-h1` to `h6`):

| Scale | Base Body Size (`--font-size-md`) | Heading 1 (`--font-size-h1`) | Small Text (`--font-size-xs`) |
| :--- | :--- | :--- | :--- |
| **`'sm'`** | **`0.875rem` (14px)** | `2.5rem` (40px) | `0.6875rem` (11px) |
| **`'md'`** *(Default)* | **`1rem` (16px)** | `3rem` (48px) | `0.75rem` (12px) |
| **`'lg'`** | **`1.125rem` (18px)** | `3.5rem` (56px) | `0.8125rem` (13px) |

---

#### F. `fonts` (`ThemeFonts`)
Customizes font family variables for sans, display, and monospaced text:

```ts
export interface ThemeFonts {
  sans?: string;    // Injects into --font-sans (Body text, buttons, inputs)
  display?: string; // Injects into --font-display (Headings, titles, banners)
  mono?: string;    // Injects into --font-mono (Code snippets, numeric inputs, badges)
}
```

---

### 3. Runtime Customization via `useTheme()`

The `useTheme()` hook provides real-time getters and setters to update the design system dynamically without page reloads:

```tsx
import { useTheme, Button, Group } from 'sans-ui';

function ThemeSettingsPanel() {
  const {
    theme,              // 'light' | 'dark'
    toggleTheme,        // () => void
    config,             // Active ThemeConfig object
    setPrimaryColor,    // (hex: string) => void
    setSecondaryColor,  // (hex: string) => void
    setRadius,          // (radius: 'sharp' | 'balanced' | 'rounded' | 'pill') => void
    setDensity,         // (density: 'compact' | 'comfortable' | 'spacious') => void
    setElevation,       // (elevation: 'flat' | 'subtle' | 'high-contrast') => void
    setFontScale,       // (scale: 'sm' | 'md' | 'lg') => void
    setFonts,           // (fonts: ThemeFonts | undefined) => void
    setConfig,          // (updater: ThemeConfig | ((prev) => ThemeConfig)) => void
  } = useTheme();

  return (
    <Group gap="sm">
      {/* Dynamic Brand Color Swapping */}
      <Button onClick={() => setPrimaryColor('#10B981')}>Emerald Brand</Button>
      <Button onClick={() => setPrimaryColor('#6366F1')}>Indigo Brand</Button>

      {/* Geometry and Density Toggles */}
      <Button onClick={() => setRadius('pill')}>Pill Style</Button>
      <Button onClick={() => setDensity('compact')}>Compact UI</Button>

      {/* Font Scale Toggle */}
      <Button onClick={() => setFontScale('lg')}>Large Fonts</Button>
    </Group>
  );
}
```

---

### 4. Pure Color Utilities (`colorUtils`)

`sans-ui` exports zero-dependency color mathematics utilities:

```ts
import {
  generateColorRamp,
  generateFocusRing,
  hexToHsl,
  hslToHex,
  hexToRgb,
  rgbToHex,
} from 'sans-ui';

// 1. Generate full 100-900 color ramp
const ramp = generateColorRamp('#6366F1');
// { 100: '#F5F5FE', 200: '#E4E5FC', ..., 500: '#6366F1', ..., 900: '#141757' }

// 2. Compute accessible focus ring string
const focusRing = generateFocusRing('#6366F1');
// "0 0 0 3px rgba(99, 102, 241, 0.35)"

// 3. Color space conversion
const hsl = hexToHsl('#6366F1'); // { h: 239, s: 84, l: 67 }
const hex = hslToHex(239, 84, 67); // "#6366F1"
```

---

## Component Catalog

### 1. Typography & Base

#### `Text`
Polymorphic typography component with modular sizing, line-clamp truncation, and semantic color mapping.

```tsx
<Text size="lg" weight={600} color="primary">Headline copy</Text>
<Text truncate={2} color="dimmed">Clamped multi-line body description...</Text>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `as` | `'p' | 'span' | 'label' | 'div' | 'small'` | `'p'` | Underlying HTML tag |
| `variant` | `'regular' | 'mono' | 'display'` | `'regular'` | Font family token to apply |
| `size` | `SizeScale` | `'md'` | Modular text font size (`xs` to `xl`) |
| `weight` | `400 | 500 | 600 | 700` | `400` | Font weight value |
| `color` | `SemanticColors | 'dimmed' | 'inherit'` | `'inherit'` | Text color token |
| `align` | `'left' | 'center' | 'right' | 'justify'` | `'left'` | Text alignment |
| `italic` | `boolean` | `false` | Applies italic styling |
| `underline` | `boolean` | `false` | Applies underline decoration |
| `strikethrough` | `boolean` | `false` | Applies line-through decoration |
| `truncate` | `boolean | number` | `false` | `true` for single-line ellipsis, or number of lines to clamp |

---

#### `Title`
Heading element rendering semantic `<h1>`–`<h6>` tags with independent visual sizing.

```tsx
<Title order={1}>Page Header</Title>
<Title order={1} size="h4" color="secondary">Semantic H1 with H4 visual scale</Title>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `order` | `1 | 2 | 3 | 4 | 5 | 6` | `1` | Semantic HTML heading level (`h1` to `h6`) |
| `size` | `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` | `'h${order}'` | Visual typography size override |
| `weight` | `500 | 600 | 700 | 800` | `700` | Font weight value |
| `color` | `SemanticColors | 'inherit'` | `'inherit'` | Title color token |

---

#### `Divider`
Horizontal or vertical line separator with support for labels and customizable border styles.

```tsx
<Divider variant="dashed" size={2} label="OR CONTINUE WITH" color="primary" />
<Divider orientation="vertical" size={2} />
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `orientation` | `'horizontal' | 'vertical'` | `'horizontal'` | Axis orientation |
| `variant` | `'solid' | 'dashed' | 'dotted'` | `'solid'` | Line stroke pattern |
| `size` | `1 | 2 | 4 | 8` | `1` | Thickness in pixels |
| `color` | `SemanticColors | 'border'` | `'border'` | Border stroke color token |
| `label` | `ReactNode` | — | Centered text/badge label (horizontal only) |

---

### 2. Structure & Layout

#### `Box`
Polymorphic surface container providing padding, radii, backgrounds, and elevation shadows.

```tsx
<Box bg="surface" padding="lg" radius="md" border shadow="sm">
  Surface Content
</Box>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `as` | `ElementType` | `'div'` | Rendered HTML tag |
| `size` | `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'` | — | Bounded max-width container size |
| `centered` | `boolean` | `false` | Centers container via margin inline auto |
| `bg` | `'app' | 'surface' | 'elevated' | SemanticColors` | `'surface'` | Background color token |
| `padding` | `SpacingScale` | `'none'` | Padding scale |
| `radius` | `RadiusScale` | `'none'` | Corner border-radius scale |
| `border` | `boolean` | `false` | Renders subtle 1px border |
| `shadow` | `SizeScale | 'none'` | `'none'` | Elevation box-shadow scale |

---

#### `Stack`
Vertical flexbox layout orchestrator (`VStack`).

```tsx
<Stack gap="md" align="stretch">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `gap` | `SpacingScale` | `'md'` | Spacing gap between children |
| `align` | `'stretch' | 'flex-start' | 'center' | 'flex-end'` | `'stretch'` | Cross-axis (`align-items`) |
| `justify` | `'flex-start' | 'center' | 'flex-end' | 'space-between'` | `'flex-start'` | Main-axis (`justify-content`) |

---

#### `Group`
Horizontal flexbox layout orchestrator (`HStack`) with wrap and child expansion controls.

```tsx
<Group gap="sm" justify="space-between" align="center" grow>
  <Button>Action 1</Button>
  <Button>Action 2</Button>
</Group>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `gap` | `SpacingScale` | `'md'` | Spacing gap between items |
| `align` | `'stretch' | 'flex-start' | 'center' | 'flex-end'` | `'center'` | Cross-axis alignment |
| `justify` | `'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'` | `'flex-start'` | Main-axis alignment |
| `wrap` | `'nowrap' | 'wrap' | 'wrap-reverse'` | `'wrap'` | Flex wrap behavior |
| `grow` | `boolean` | `false` | Forces all children to expand equally |

---

#### `Grid` & `Grid.Col`
12-column responsive CSS Grid system with breakpoint spans and column offsets.

```tsx
<Grid columns={12} gutter="md">
  <Grid.Col span={12} md={8}>Main Content</Grid.Col>
  <Grid.Col span={12} md={4}>Sidebar</Grid.Col>
</Grid>
```

**Grid Props:**
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `columns` | `number` | `12` | Grid column count |
| `gutter` | `SpacingScale` | `'md'` | Gap between grid columns and rows |

**Grid.Col Props:**
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `span` | `number | 'auto'` | `12` | Base column span (1–12 or 'auto') |
| `sm` | `number | 'auto'` | — | Span for viewport >= 540px |
| `md` | `number | 'auto'` | — | Span for viewport >= 768px |
| `lg` | `number | 'auto'` | — | Span for viewport >= 1024px |
| `xl` | `number | 'auto'` | — | Span for viewport >= 1280px |
| `offset` | `number` | `0` | Column offset start position (1–11) |

---

#### `AspectRatio`
Forces a fixed aspect ratio on child media or content.

```tsx
<AspectRatio ratio={16 / 9}>
  <iframe src="https://www.youtube.com/embed/..." title="Video" />
</AspectRatio>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ratio` | `number` | `1` | Aspect ratio (e.g. `16/9`, `4/3`, `1`) |

---

#### `Container`
Centered page layout container with responsive max-width constraints.

```tsx
<Container size="lg" padding="md">
  Page content
</Container>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fluid'` | `'md'` | Maximum bounded width |
| `padding` | `SpacingScale` | `'md'` | Horizontal inline padding |

---

### 3. Actions & Navigation

#### `Button`
Accessible interactive button supporting 5 variants, 7 semantic colors, loading spinner, and icon sections.

```tsx
<Button
  variant="filled"
  color="primary"
  loading={isLoading}
  leftSection={<StarIcon />}
  onClick={handleClick}
>
  Save Changes
</Button>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'filled' | 'light' | 'outline' | 'subtle' | 'link'` | `'filled'` | Visual button variant |
| `color` | `SemanticColors` | `'primary'` | Semantic color palette |
| `size` | `SizeScale` | `'md'` | Button height and padding scale |
| `radius` | `RadiusScale` | `'md'` | Corner border radius |
| `loading` | `boolean` | `false` | Displays spinner and disables interaction |
| `disabled` | `boolean` | `false` | Native disabled state |
| `fullWidth` | `boolean` | `false` | Expands button to 100% parent width |
| `leftSection` | `ReactNode` | — | Icon or element before label |
| `rightSection`| `ReactNode` | — | Icon or element after label |

---

#### `IconButton`
Square or circular icon-only action button with mandatory `aria-label`.

```tsx
<IconButton
  icon={<TrashIcon />}
  aria-label="Delete item"
  color="danger"
  variant="light"
  radius="full"
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `ReactNode` | *required* | Icon node to render |
| `aria-label` | `string` | *required* | Accessible label for screen readers |
| `variant` | `'filled' | 'light' | 'outline' | 'subtle'` | `'subtle'` | Visual style variant |
| `color` | `SemanticColors` | `'neutral'` | Semantic color palette |
| `size` | `SizeScale` | `'md'` | Dimensions scale |
| `radius` | `RadiusScale` | `'md'` | Corner border radius |
| `loading` | `boolean` | `false` | Displays spinner indicator |
| `disabled` | `boolean` | `false` | Disables button |

---

### 4. Forms & Data Capture

#### `InputWrapper`
Reusable wrapper standardizing labels, required asterisks, helper descriptions, and validation errors.

```tsx
<InputWrapper label="Custom Input" description="Helper details" error="Field required">
  <input type="text" />
</InputWrapper>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `ReactNode` | — | Input label |
| `description` | `ReactNode` | — | Descriptive helper text below label |
| `error` | `string | boolean` | — | Error message string or boolean flag |
| `required` | `boolean` | `false` | Renders red asterisk (`*`) indicator |
| `size` | `SizeScale` | `'md'` | Size scale |
| `disabled` | `boolean` | `false` | Applies disabled opacity |

---

#### `TextField`
Single-line text input with support for input types, error state, and section adornments.

```tsx
<TextField
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `'text' | 'password' | 'email' | 'search' | 'tel' | 'url'` | `'text'` | HTML input type |
| `label` | `ReactNode` | — | Input label |
| `description` | `ReactNode` | — | Helper text |
| `error` | `string | boolean` | — | Error text or boolean invalid state |
| `required` | `boolean` | `false` | Required field indicator |
| `size` | `SizeScale` | `'md'` | Height and font scale |
| `leftSection` | `ReactNode` | — | Prefix icon / element |
| `rightSection`| `ReactNode` | — | Suffix icon / element |

---

#### `NumberInput`
Numeric stepper with up/down controls, precision rounding, and keyboard navigation.

```tsx
<NumberInput
  label="Quantity"
  min={1}
  max={100}
  step={1}
  value={qty}
  onChange={(val) => setQty(val)}
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number | ''` | — | Controlled numeric value |
| `min` | `number` | `-Infinity` | Minimum allowed value |
| `max` | `number` | `Infinity` | Maximum allowed value |
| `step` | `number` | `1` | Incremental step amount |
| `precision` | `number` | `0` | Number of decimal places |
| `hideControls` | `boolean` | `false` | Hides up/down stepper buttons |
| `onChange` | `(val: number | undefined) => void` | — | Change callback |

---

#### `Select`
Custom combobox dropdown with search filtering, clearable option, and portal rendering.

```tsx
<Select
  label="Country"
  data={[{ label: 'United States', value: 'us' }, { label: 'Canada', value: 'ca' }]}
  searchable
  clearable
  value={country}
  onChange={(val) => setCountry(val)}
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `data` | `Array<{ label: string; value: string; disabled?: boolean }> | string[]` | *required* | Option data array |
| `value` | `string` | — | Controlled selected value |
| `placeholder` | `string` | `'Select option...'` | Placeholder trigger text |
| `searchable` | `boolean` | `false` | Enables live search filter input |
| `clearable` | `boolean` | `false` | Displays clear selection button |
| `onChange` | `(val: string | null) => void` | — | Selection change handler |

---

#### `Switch`
Accessible toggle switch with animated spring knob and semantic colors.

```tsx
<Switch
  label="Enable Notifications"
  color="success"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `ReactNode` | — | Label text |
| `labelPosition` | `'left' | 'right'` | `'right'` | Position of label relative to switch |
| `color` | `SemanticColors` | `'primary'` | Active switch track color |
| `size` | `SizeScale` | `'md'` | Switch dimensions scale |
| `checked` | `boolean` | — | Controlled boolean state |

---

#### `DatePicker` & `DateRangePicker`
Popover calendar date pickers wrapping `react-day-picker` and `date-fns` rendered through React Portals.

```tsx
<DatePicker
  label="Appointment Date"
  clearable
  value={selectedDate}
  onChange={(d) => setSelectedDate(d)}
/>

<DateRangePicker
  label="Stay Duration"
  clearable
  value={range}
  onChange={(r) => setRange(r)}
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `Date | null` (or `DateRange | null`) | — | Selected date or date range |
| `dateFormat` | `string` | `'PPP'` (or `'PP'`) | date-fns format string |
| `placeholder` | `string` | `'Pick a date...'` | Trigger button placeholder |
| `clearable` | `boolean` | `false` | Displays clear date button |
| `minDate` | `Date` | — | Earliest selectable date |
| `maxDate` | `Date` | — | Latest selectable date |
| `onChange` | `(date | range) => void` | — | Change handler callback |

---

### 5. Media & Data Display

#### `Avatar`
User avatar with automatic initials generator, deterministic color assignment, and image fallback.

```tsx
<Avatar src="https://..." alt="User" />
<Avatar name="Sebastián Narváez" color="auto" size="lg" />
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | `string` | — | Image URL |
| `name` | `string` | — | Full name used for initials fallback (e.g. "SN") |
| `size` | `SizeScale | number` | `'md'` | Standard scale or explicit numeric pixel size |
| `radius` | `RadiusScale` | `'full'` | Corner border radius |
| `color` | `SemanticColors | 'auto'` | `'neutral'` | Color token, or `'auto'` for hash-based initials color |

---

#### `Image`
Resilient image container tracking load failures and rendering custom fallback components without layout jump.

```tsx
<Image
  src="https://..."
  alt="Cover image"
  fit="cover"
  radius="md"
  height={200}
  fallback={<div>Image failed to load</div>}
/>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | `string` | *required* | Source image URL |
| `alt` | `string` | *required* | Alternative description |
| `fit` | `'cover' | 'contain' | 'fill' | 'scale-down' | 'none'` | `'cover'` | CSS `object-fit` rule |
| `radius` | `RadiusScale` | `'none'` | Corner border radius |
| `fallback` | `ReactNode` | — | Node rendered when image load triggers `onError` |
| `loading` | `'lazy' | 'eager'` | `'lazy'` | Native browser image loading strategy |

---

#### `Badge`
Compact indicator for tags, counts, and entity statuses.

```tsx
<Badge variant="filled" color="success">Active</Badge>
<Badge variant="dot" color="primary">In Progress</Badge>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'filled' | 'light' | 'outline' | 'dot'` | `'light'` | Visual badge style |
| `color` | `SemanticColors` | `'primary'` | Semantic color palette |
| `size` | `SizeScale` | `'md'` | Badge height and text size |
| `radius` | `RadiusScale` | `'xl'` | Corner border radius |
| `leftSection` | `ReactNode` | — | Prefix icon / element |

---

#### `Card`
Compound card pattern with header, body, and footer containers.

```tsx
<Card withBorder shadow="sm">
  <Card.Header>
    <Title order={3} size="h5">Card Title</Title>
    <Badge color="primary">New</Badge>
  </Card.Header>
  <Card.Body>
    <Text size="sm">Main card description and metrics.</Text>
  </Card.Body>
  <Card.Footer>
    <Button variant="subtle" size="sm">Cancel</Button>
    <Button color="primary" size="sm">Confirm</Button>
  </Card.Footer>
</Card>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `padding` | `SpacingScale` | `'md'` | Internal padding scale |
| `radius` | `RadiusScale` | `'md'` | Card corner radius |
| `withBorder`| `boolean` | `true` | Renders subtle 1px border |
| `shadow` | `SizeScale | 'none'` | `'sm'` | Elevation box-shadow scale |

---

### 6. Overlays & Feedback

#### `Modal`
Accessible dialog overlay rendered at `document.body` with backdrop blur, scroll locking, and `Escape` dismissal.

```tsx
<Modal
  opened={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Deletion"
  size="md"
>
  <Text size="sm">Are you sure you want to delete this record?</Text>
  <Group justify="flex-end" gap="sm" style={{ marginTop: 16 }}>
    <Button variant="subtle" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button color="danger" onClick={handleDelete}>Delete</Button>
  </Group>
</Modal>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `opened` | `boolean` | *required* | Controls modal visibility |
| `onClose` | `() => void` | *required* | Dismiss callback |
| `title` | `ReactNode` | — | Modal header title text |
| `size` | `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'` | `'md'` | Modal max-width dialog scale |
| `centered` | `boolean` | `true` | Vertically and horizontally centers dialog |
| `closeOnClickOutside` | `boolean` | `true` | Dismisses when backdrop is clicked |
| `closeOnEscape` | `boolean` | `true` | Dismisses on `Escape` key press |
| `withCloseButton` | `boolean` | `true` | Renders top-right close 'X' button |

---

#### `Tooltip`
Floating contextual hint with directional arrows and hover/focus triggers.

```tsx
<Tooltip label="Edit user profile" position="top" withArrow>
  <Button variant="outline">Hover Me</Button>
</Tooltip>
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `ReactNode` | *required* | Hint content inside tooltip |
| `children` | `ReactElement` | *required* | Target trigger element |
| `position` | `'top' | 'right' | 'bottom' | 'left'` | `'top'` | Placement relative to trigger |
| `withArrow` | `boolean` | `true` | Displays directional pointer arrow |
| `openDelay` | `number` | `0` | Delay in ms before appearing |
| `closeDelay` | `number` | `0` | Delay in ms before closing |

---

#### `Loader`
Animated vector loading indicator supporting 3 SVG animation variants.

```tsx
<Loader variant="spinner" size="lg" color="primary" />
<Loader variant="dots" size="md" color="secondary" />
<Loader variant="bars" size="sm" color="success" />
```

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'spinner' | 'dots' | 'bars'` | `'spinner'` | Animation variant |
| `color` | `SemanticColors` | `'primary'` | Loader color token |
| `size` | `SizeScale | number` | `'md'` | Standard scale or explicit numeric pixel size |

---


### 7. Map Controls & Overlays

Modular map control widgets built with `react-map-gl/maplibre`, styled using `sans-ui` design tokens and accessible `IconButton` controls.

```tsx
import { Map } from 'react-map-gl/maplibre';
import {
  MapControlWrapper,
  FullscreenControl,
  BasemapToggleControl,
  DefaultViewControl,
  GeolocateControl,
  CompassControl,
  ZoomControlGroup,
} from 'sans-ui';
import 'maplibre-gl/dist/maplibre-gl.css';

function InteractiveMap() {
  const [basemap, setBasemap] = useState<'vector' | 'satellite'>('vector');

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <Map
        initialViewState={{ longitude: -74.006, latitude: 40.7128, zoom: 11 }}
        mapStyle={basemap === 'vector' ? 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json' : '...'}
      >
        <MapControlWrapper position="top-right" gap="sm">
          <FullscreenControl />
          <BasemapToggleControl currentBasemap={basemap} onToggle={() => setBasemap(b => b === 'vector' ? 'satellite' : 'vector')} />
          <DefaultViewControl center={[-74.006, 40.7128]} zoom={11} />
          <GeolocateControl zoom={14} />
          <CompassControl />
          <ZoomControlGroup />
        </MapControlWrapper>
      </Map>
    </div>
  );
}
```

#### `DefaultViewControl`
Smoothly animates camera to initial center, zoom, pitch, and bearing coordinates.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `center` | `[number, number]` | `[-74.006, 40.7128]` | Target longitude and latitude coordinates |
| `zoom` | `number` | `9` | Target zoom level |
| `pitch` | `number` | `0` | Target camera tilt pitch (0–85) |
| `bearing` | `number` | `0` | Target camera bearing rotation (0–360) |
| `mapId` | `string` | — | Target map ID in multi-map contexts |
| `size` | `SizeScale` | `'md'` | Control button dimensions |

---

#### `GeolocateControl`
Uses browser Geolocation API to find user coordinates and flies camera to user location.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `zoom` | `number` | `14` | Zoom level when location is resolved |
| `onGeolocate` | `(coords: GeolocationCoordinates) => void` | — | Callback invoked on successful geolocation |
| `onError` | `(error: GeolocationPositionError) => void` | — | Callback on denial or timeout |
| `size` | `SizeScale` | `'md'` | Control button dimensions |

---

#### `ZoomControlGroup`
Unified vertical grouped pill combining Zoom In (`+`) and Zoom Out (`−`) buttons with seamless border integration.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `SizeScale` | `'md'` | Button size scale |
| `mapId` | `string` | — | Optional map ID |

---

#### `BasemapToggleControl`
Toggles active basemap style and dynamically switches icons between street/vector map and satellite imagery.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `currentBasemap` | `'vector' | 'satellite' | string` | *required* | Current active basemap identifier |
| `onToggle` | `() => void` | *required* | Click toggle handler |
| `size` | `SizeScale` | `'md'` | Button size scale |

---

#### `CompassControl`
Subscribes to map bearing in real-time and rotates compass needle SVG. On click, smoothly resets bearing and pitch to North.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `SizeScale` | `'md'` | Button size scale |
| `mapId` | `string` | — | Optional map ID |

---

#### `FullscreenControl`
Toggles native browser fullscreen mode on the map container with dynamic expand/compress icons.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `containerRef` | `React.RefObject<HTMLElement>` | — | Target map container to make fullscreen |
| `size` | `SizeScale` | `'md'` | Button size scale |

---

#### `MapControlWrapper`
Floating overlay positioning container supporting `top-left`, `top-right`, `bottom-left`, and `bottom-right` anchors.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `position` | `'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` | `'top-right'` | Screen corner anchor |
| `gap` | `'xs' | 'sm' | 'md' | 'lg'` | `'sm'` | Spacing between controls |

---

## Development & Sandbox

To run the interactive sandbox showcase locally:

```bash
# Start Vite development server
npm run dev

# Run TypeScript typechecker
npm run typecheck

# Build production library distribution bundle (dist/)
npm run build
```

---

## License

MIT &copy; 2026 Sebasti&aacute;n Andr&eacute;s Narv&aacute;ez Salcedo.
