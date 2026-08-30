# DEVELOPMENT PLAN: SANS-UI DESIGN SYSTEM & COMPONENT LIBRARY

---

### 1. Main Objective

Build, compile, and package **`sans-ui`**, a standalone, high-performance React UI component library based on strict TypeScript and CSS Modules. Deliver a unified style bundle (`dist/style.css`), complete TypeScript declaration files (`.d.ts`), and an interactive showcase/documentation sandbox application to test and validate all components across light and dark themes.

---

### 2. Project Inputs

The implementation will strictly follow the design tokens and architectural specifications defined in the 8 baseline configuration and stylesheet files:

1. **[Component Specification Manual](own_artifacts\UI COMPONENT TECHNICAL SPECIFICATION (DESIGN SYSTEM).pdf):** Complete catalog of component props, TypeScript interfaces, default values, and DOM rendering rules.
2. **`src/theme/base.css`:** Primitive color ramps (100–900), light/dark semantic color mappings, contextual surfaces, and container size tokens (`--container-xs` to `--container-xl`).
3. **`src/theme/typography.css`:** Font families (`Lato`, `Poppins`, `JetBrains Mono`), modular scale in `rem`, font weights, line heights, and letter spacing tokens.
4. **`src/theme/geometry.css`:** Border radius scale, border widths, accessible focus ring (`--shadow-focus`), and multi-layer elevation box-shadows.
5. **`src/theme/reset.css`:** Universal DOM normalization (`box-sizing: border-box`, margin resets, and form control font inheritance).
6. **`src/theme/z-index.css`:** Mathematical elevation layer scale for sticky elements, dropdowns, overlays, tooltips, and modals.
7. **`src/theme/theme.css`:** Unified entry point importing all design tokens and reset layers.
8. **`vite.config.ts` & `tsconfig.json`:** Build configuration targeting `esnext` in Library Mode with `vite-plugin-dts` and explicit `peerDependencies` exclusion (`react`, `react-dom`).

---

### 3. Specific Objectives

* **Phase 1: Environment Setup, Font Bundling & Theme System**
* Establish the `src/` directory structure and integrate local font packages (`@fontsource/lato`, `@fontsource/poppins`, `@fontsource/jetbrains-mono`).
* Implement `ThemeProvider` and the `useTheme` hook supporting light theme as default, toggleable dark theme via `data-theme` attribute, and `localStorage` state persistence.

* **Phase 2: Base Typography & Layout Orchestrators**
* Implement `Text`, `Title`, and `Divider` components consuming typography tokens.
* Implement `Box` (Surface) supporting element polymorphism (`as` prop), responsive `size` constraints (`max-width`), and automated horizontal centering (`centered`).
* Build layout primitives: `Stack` (vertical flex), `Group` (horizontal flex), `Grid` with `Grid.Col` (12-column system), `Container` (safe area margins), and `AspectRatio`.

* **Phase 3: Actions & Form Data Capture**
* Build `Button` and `IconButton` supporting visual variants, loading spinners, disabled states, and accessible focus outlines (`--shadow-focus`).
* Implement `InputWrapper` to standardize form labels, helper text, and validation error messages.
* Build `TextField`, `NumberInput`, `Select`, and `Switch` supporting controlled and uncontrolled state bindings.
* Implement `DatePicker` and `DateRangePicker` wrapping `react-day-picker` and localized with `date-fns`.

* **Phase 4: Media, Visual Indicators & Overlays**
* Build `Avatar`, `Badge`, `Card`, and `Image` (with `onError` fallback handling for custom replacement components).
* Implement `Loader` with SVG animation variants.
* Build `Modal` using React Portals, featuring backdrop blur, size presets (`max-width`), vertical centering, escape/click-outside triggers, and mobile safe margins.
* Implement `Tooltip` with floating positioning and anchor arrow.

* **Phase 5: Interactive Sandbox Showcase Application**
* Develop a dedicated internal demo application (`src/app/` or `playground/`) using Vite to render each component in isolation.
* Implement interactive state controls (toggle props, change text, trigger validation errors).
* Provide a global theme switcher to visually inspect all components across light and dark modes in both mobile and desktop viewports.

* **Phase 6: Library Packaging, Barrel Exports & Build Verification**
* Consolidate `src/index.ts` with font side-effects, component exports, and TypeScript type declarations.
* Run `vite build` to generate `dist/index.js` (ESM), `dist/index.cjs` (CJS), `dist/style.css`, and `dist/index.d.ts`.
* Verify externalization of `react` and `react-dom` to prevent bundle duplication issues in consuming applications.

---

### 4. Technical Acceptance Criteria

1. **Zero Class Collisions:** CSS Modules enforce scoped class names (`[name]__[local]___[hash:base64:5]`).
2. **Strict Typings:** Full TypeScript compilation with `strict: true` and standardized `[ComponentName]Props` exported for all components.
3. **DOM Accessibility & Refs:** All interactive controls implement `React.forwardRef` and satisfy WCAG 2.1 AA contrast requirements.
4. **Plug-and-Play Independence:** Installing `sans-ui` and importing its compiled stylesheet (`import 'sans-ui/styles.css'`) works out of the box without requiring external network requests or HTML `<head>` modifications.
