import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeFonts {
  sans?: string;    // Overrides --font-sans
  display?: string; // Overrides --font-display
  mono?: string;    // Overrides --font-mono
}

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  fonts?: ThemeFonts;
  setFonts: (fonts: ThemeFonts | undefined) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  targetElement?: HTMLElement | null;
  fonts?: ThemeFonts;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'sans-ui-theme',
  targetElement,
  fonts: fontsProp,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey) as Theme | null;
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
      } catch {
        // ignore
      }
    }
    return defaultTheme;
  });

  const [fonts, setFontsState] = useState<ThemeFonts | undefined>(fontsProp);

  useEffect(() => {
    setFontsState(fontsProp);
  }, [fontsProp]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // ignore
      }
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const setFonts = (newFonts: ThemeFonts | undefined) => {
    setFontsState(newFonts);
  };

  // Synchronize data-theme attribute
  useEffect(() => {
    const el = targetElement || (typeof document !== 'undefined' ? document.documentElement : null);
    if (el) {
      el.setAttribute('data-theme', theme);
    }
  }, [theme, targetElement]);

  // Synchronize dynamic font CSS variables
  useEffect(() => {
    const el = targetElement || (typeof document !== 'undefined' ? document.documentElement : null);
    if (!el) return;

    if (fonts?.sans) {
      el.style.setProperty('--font-sans', fonts.sans);
    } else {
      el.style.removeProperty('--font-sans');
    }

    if (fonts?.display) {
      el.style.setProperty('--font-display', fonts.display);
    } else {
      el.style.removeProperty('--font-display');
    }

    if (fonts?.mono) {
      el.style.setProperty('--font-mono', fonts.mono);
    } else {
      el.style.removeProperty('--font-mono');
    }
  }, [fonts, targetElement]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      fonts,
      setFonts,
    }),
    [theme, fonts]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
ThemeProvider.displayName = 'ThemeProvider';
