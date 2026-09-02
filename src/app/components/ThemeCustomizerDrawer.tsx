import React, { useState } from 'react';
import {
  Modal,
  Title,
  Text,
  Stack,
  Group,
  Button,
  IconButton,
  Badge,
  Divider,
  Box,
  TextField,
} from '../../index';
import {
  useTheme,
  type RadiusPreset,
  type ElevationPreset,
  type DensityMode,
  type FontScale,
} from '../../theme';

const COLOR_SWATCHES = [
  { name: 'Default Cyan', hex: '#00B5D9' },
  { name: 'Indigo', hex: '#6366F1' },
  { name: 'Violet', hex: '#8B5CF6' },
  { name: 'Fuchsia', hex: '#D946EF' },
  { name: 'Emerald', hex: '#10B981' },
  { name: 'Amber', hex: '#F59E0B' },
  { name: 'Rose', hex: '#EF4444' },
  { name: 'Slate', hex: '#334155' },
];

export const ThemeCustomizerDrawer: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const {
    config,
    setPrimaryColor,
    setRadius,
    setElevation,
    setDensity,
    setFontScale,
    setConfig,
  } = useTheme();

  const currentPrimary = config.colors?.primary || '#00B5D9';
  const currentRadius = config.radius || 'balanced';
  const currentElevation = config.elevation || 'subtle';
  const currentDensity = config.density || 'comfortable';
  const currentFontScale = config.fontScale || 'md';

  const resetDefaults = () => {
    setConfig({
      colors: undefined,
      radius: 'balanced',
      elevation: 'subtle',
      density: 'comfortable',
      fontScale: 'md',
      fonts: undefined,
    });
  };

  const settingsIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 'var(--z-index-appbar, 200)',
        }}
      >
        <Button
          variant="filled"
          color="primary"
          radius="full"
          leftSection={settingsIcon}
          onClick={() => setOpened(true)}
          style={{
            boxShadow: 'var(--shadow-lg)',
            paddingInline: '18px',
            height: '46px',
          }}
        >
          Theme Customizer
        </Button>
      </div>

      {/* Customizer Modal Dialog */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Theme System Customizer"
        size="lg"
      >
        <Stack gap="lg">
          <Text size="sm" color="dimmed">
            Configure system tokens in real time. Changes dynamically generate mathematical color ramps and inject CSS variables into the root element.
          </Text>

          {/* 1. Primary Color */}
          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="sm" weight={600}>Primary Brand Color</Text>
              <Badge variant="light" color="primary">{currentPrimary}</Badge>
            </Group>

            {/* Quick Palette Swatches */}
            <Group gap="xs" wrap="wrap">
              {COLOR_SWATCHES.map((swatch) => (
                <button
                  key={swatch.hex}
                  title={swatch.name}
                  onClick={() => setPrimaryColor(swatch.hex)}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: swatch.hex,
                    border: currentPrimary.toLowerCase() === swatch.hex.toLowerCase()
                      ? '3px solid var(--text-primary)'
                      : '2px solid rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 100ms ease',
                    transform: currentPrimary.toLowerCase() === swatch.hex.toLowerCase() ? 'scale(1.15)' : 'scale(1)',
                  }}
                />
              ))}
            </Group>

            {/* Custom Native Color Picker */}
            <Group gap="sm" align="center" style={{ marginTop: '6px' }}>
              <input
                type="color"
                value={currentPrimary}
                onChange={(e) => setPrimaryColor(e.target.value)}
                style={{
                  width: '40px',
                  height: '36px',
                  padding: '0',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                }}
              />
              <TextField
                size="sm"
                value={currentPrimary}
                onChange={(e) => setPrimaryColor(e.target.value)}
                placeholder="#00B5D9"
                style={{ width: '130px' }}
              />
              <Text size="xs" color="dimmed">Select custom hex or click swatches</Text>
            </Group>
          </Stack>

          <Divider size={1} />

          {/* 2. Radius Preset */}
          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="sm" weight={600}>Corner Radius Preset</Text>
              <Badge variant="outline" color="neutral">{currentRadius.toUpperCase()}</Badge>
            </Group>
            <Group gap="xs">
              {(['sharp', 'balanced', 'rounded', 'pill'] as RadiusPreset[]).map((r) => (
                <Button
                  key={r}
                  size="xs"
                  variant={currentRadius === r ? 'filled' : 'outline'}
                  color={currentRadius === r ? 'primary' : 'neutral'}
                  onClick={() => setRadius(r)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {r}
                </Button>
              ))}
            </Group>
          </Stack>

          <Divider size={1} />

          {/* 3. Density Mode */}
          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="sm" weight={600}>UI Density Mode</Text>
              <Badge variant="outline" color="neutral">{currentDensity.toUpperCase()}</Badge>
            </Group>
            <Group gap="xs">
              {(['compact', 'comfortable', 'spacious'] as DensityMode[]).map((d) => (
                <Button
                  key={d}
                  size="xs"
                  variant={currentDensity === d ? 'filled' : 'outline'}
                  color={currentDensity === d ? 'primary' : 'neutral'}
                  onClick={() => setDensity(d)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {d}
                </Button>
              ))}
            </Group>
          </Stack>

          <Divider size={1} />

          {/* 4. Elevation / Shadows */}
          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="sm" weight={600}>Elevation & Shadows</Text>
              <Badge variant="outline" color="neutral">{currentElevation.toUpperCase()}</Badge>
            </Group>
            <Group gap="xs">
              {(['flat', 'subtle', 'high-contrast'] as ElevationPreset[]).map((el) => (
                <Button
                  key={el}
                  size="xs"
                  variant={currentElevation === el ? 'filled' : 'outline'}
                  color={currentElevation === el ? 'primary' : 'neutral'}
                  onClick={() => setElevation(el)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {el}
                </Button>
              ))}
            </Group>
          </Stack>

          <Divider size={1} />

          {/* 5. Font Scale */}
          <Stack gap="xs">
            <Group justify="space-between" align="center">
              <Text size="sm" weight={600}>Base Typography Scale</Text>
              <Badge variant="outline" color="neutral">{currentFontScale.toUpperCase()}</Badge>
            </Group>
            <Group gap="xs">
              {(['sm', 'md', 'lg'] as FontScale[]).map((fs) => (
                <Button
                  key={fs}
                  size="xs"
                  variant={currentFontScale === fs ? 'filled' : 'outline'}
                  color={currentFontScale === fs ? 'primary' : 'neutral'}
                  onClick={() => setFontScale(fs)}
                >
                  {fs === 'sm' ? 'Small (14px)' : fs === 'md' ? 'Medium (16px)' : 'Large (18px)'}
                </Button>
              ))}
            </Group>
          </Stack>

          <Divider size={1} />

          {/* Reset Action */}
          <Group justify="space-between" align="center">
            <Button variant="subtle" color="danger" size="sm" onClick={resetDefaults}>
              Reset to Factory Defaults
            </Button>
            <Button variant="filled" color="primary" size="sm" onClick={() => setOpened(false)}>
              Done
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
