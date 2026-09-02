import React, { useState } from 'react';
import clsx from 'clsx';
import { Title, Text, Button, IconButton, Badge, Group, Stack, Box, Select } from '../index';
import { useTheme, type ThemeFonts } from '../theme';
import styles from './App.module.css';

import { TypographySection } from './sections/TypographySection';
import { LayoutSection } from './sections/LayoutSection';
import { ActionsSection } from './sections/ActionsSection';
import { FormsSection } from './sections/FormsSection';
import { MediaSection } from './sections/MediaSection';
import { OverlaysSection } from './sections/OverlaysSection';
import { MapSection } from './sections/MapSection';
import { ThemeCustomizerDrawer } from './components/ThemeCustomizerDrawer';

type Tab = 'typography' | 'layout' | 'actions' | 'forms' | 'media' | 'overlays' | 'map';
type Viewport = 'full' | 'tablet' | 'mobile';

const FONT_PRESETS: Array<{
  id: string;
  name: string;
  fonts?: ThemeFonts;
}> = [
  {
    id: 'default',
    name: 'Default (Lato / Poppins)',
    fonts: undefined,
  },
  {
    id: 'system',
    name: 'System UI (Inter / Roboto)',
    fonts: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
  },
  {
    id: 'editorial',
    name: 'Editorial (Merriweather / Serif)',
    fonts: {
      sans: "'Merriweather', Georgia, Cambria, 'Times New Roman', Times, serif",
      display: "'Playfair Display', Georgia, 'Times New Roman', serif",
      mono: "'JetBrains Mono', monospace",
    },
  },
  {
    id: 'accessible',
    name: 'Accessible (Atkinson / Clean)',
    fonts: {
      sans: "'Atkinson Hyperlegible', 'Trebuchet MS', 'Segoe UI', sans-serif",
      display: "'Atkinson Hyperlegible', 'Trebuchet MS', 'Segoe UI', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
  },
];

export const App: React.FC = () => {
  const { theme, toggleTheme, setFonts } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('typography');
  const [viewport, setViewport] = useState<Viewport>('full');
  const [activeFontPreset, setActiveFontPreset] = useState<string>('default');

  const handleFontChange = (presetId: string | null) => {
    if (!presetId) return;
    setActiveFontPreset(presetId);
    const selected = FONT_PRESETS.find((p) => p.id === presetId);
    setFonts(selected?.fonts);
  };

  const sunIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );

  const moonIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  const viewportClasses: Record<Viewport, string> = {
    full: styles.viewportFull,
    tablet: styles.viewportTablet,
    mobile: styles.viewportMobile,
  };

  return (
    <div className={styles.shell}>
      {/* Top Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoArea}>
            <Title order={1} size="h3" color="primary">sans-ui</Title>
            <Badge variant="dot" color="success">v0.1.0 Ready</Badge>
          </div>

          {/* Navigation Tabs */}
          <nav className={styles.navTabs}>
            <button className={clsx(styles.tabButton, activeTab === 'typography' && styles.tabActive)} onClick={() => setActiveTab('typography')}>
              Typography
            </button>
            <button className={clsx(styles.tabButton, activeTab === 'layout' && styles.tabActive)} onClick={() => setActiveTab('layout')}>
              Layout
            </button>
            <button className={clsx(styles.tabButton, activeTab === 'actions' && styles.tabActive)} onClick={() => setActiveTab('actions')}>
              Actions
            </button>
            <button className={clsx(styles.tabButton, activeTab === 'forms' && styles.tabActive)} onClick={() => setActiveTab('forms')}>
              Forms
            </button>
            <button className={clsx(styles.tabButton, activeTab === 'media' && styles.tabActive)} onClick={() => setActiveTab('media')}>
              Media
            </button>
            <button className={clsx(styles.tabButton, activeTab === 'overlays' && styles.tabActive)} onClick={() => setActiveTab('overlays')}>
              Overlays
            </button>
            <button className={clsx(styles.tabButton, activeTab === 'map' && styles.tabActive)} onClick={() => setActiveTab('map')}>
              Map Controls
            </button>
          </nav>

          {/* Controls: Font Selector + Viewport + Theme Switcher */}
          <Group gap="sm" align="center">
            {/* Font Preset Selector */}
            <div style={{ width: 200 }}>
              <Select
                size="xs"
                data={FONT_PRESETS.map((p) => ({ label: p.name, value: p.id }))}
                value={activeFontPreset}
                onChange={handleFontChange}
                placeholder="Font Family..."
              />
            </div>

            <Group gap="xs">
              <Badge variant={viewport === 'full' ? 'filled' : 'outline'} color="neutral" style={{ cursor: 'pointer' }} onClick={() => setViewport('full')}>
                Desktop
              </Badge>
              <Badge variant={viewport === 'tablet' ? 'filled' : 'outline'} color="neutral" style={{ cursor: 'pointer' }} onClick={() => setViewport('tablet')}>
                768px
              </Badge>
              <Badge variant={viewport === 'mobile' ? 'filled' : 'outline'} color="neutral" style={{ cursor: 'pointer' }} onClick={() => setViewport('mobile')}>
                375px
              </Badge>
            </Group>

            <IconButton
              icon={theme === 'dark' ? sunIcon : moonIcon}
              aria-label="Toggle light and dark theme"
              variant="subtle"
              color="neutral"
              radius="full"
              size="md"
              onClick={toggleTheme}
            />
          </Group>
        </div>
      </header>

      {/* Main Sandbox Area */}
      <main className={clsx(styles.mainContent, viewportClasses[viewport])}>
        {activeTab === 'typography' && <TypographySection />}
        {activeTab === 'layout' && <LayoutSection />}
        {activeTab === 'actions' && <ActionsSection />}
        {activeTab === 'forms' && <FormsSection />}
        {activeTab === 'media' && <MediaSection />}
        {activeTab === 'overlays' && <OverlaysSection />}
        {activeTab === 'map' && <MapSection />}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <Text size="xs" color="dimmed">
          sans-ui &copy; 2026. Built with TypeScript, CSS Modules, and Vite Library Mode.
        </Text>
      </footer>

      {/* Floating Theme Customizer Drawer */}
      <ThemeCustomizerDrawer />
    </div>
  );
};
