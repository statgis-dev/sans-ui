import React, { useState } from 'react';
import { Title, Text, Divider, Box, Stack, Group, Card, Badge } from '../../index';

export const TypographySection: React.FC = () => {
  const [truncateLines, setTruncateLines] = useState<number>(2);

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} size="h2">Typography & Base</Title>
        <Text color="dimmed" size="sm">
          Strict type-scale, modular rem sizing, and responsive headings powered by Lato, Poppins, and JetBrains Mono.
        </Text>
      </Box>

      {/* Font Family Showcase */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Font Families</Title>
          <Badge variant="light" color="primary">Tokens</Badge>
        </Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Box padding="sm" bg="app" radius="sm">
              <Text size="xs" color="dimmed">--font-display (Poppins)</Text>
              <Title order={3} size="h3">The quick brown fox jumps over the lazy dog</Title>
            </Box>
            <Box padding="sm" bg="app" radius="sm">
              <Text size="xs" color="dimmed">--font-sans (Lato - Default Body)</Text>
              <Text size="md">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</Text>
            </Box>
            <Box padding="sm" bg="app" radius="sm">
              <Text size="xs" color="dimmed">--font-mono (JetBrains Mono)</Text>
              <Text variant="mono" size="sm">const greeting = "Hello, Sans-UI!"; console.log(greeting);</Text>
            </Box>
          </Stack>
        </Card.Body>
      </Card>

      {/* Title Hierarchy */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Headings (Title)</Title>
          <Badge variant="dot" color="success">Orders 1 - 6</Badge>
        </Card.Header>
        <Card.Body>
          <Stack gap="sm">
            <Title order={1}>H1 Heading Display (3rem / 48px)</Title>
            <Title order={2}>H2 Heading Section (2.25rem / 36px)</Title>
            <Title order={3}>H3 Heading Subsection (1.75rem / 28px)</Title>
            <Title order={4}>H4 Heading Block (1.5rem / 24px)</Title>
            <Title order={5}>H5 Heading Group (1.25rem / 20px)</Title>
            <Title order={6}>H6 Heading Small (1.125rem / 18px)</Title>
            <Divider label="Visual Size Override Demo" />
            <Text size="sm" color="dimmed">HTML tag is h1 for SEO, but visually styled as h4:</Text>
            <Title order={1} size="h4" color="primary">Semantic H1 with H4 Visual Size</Title>
          </Stack>
        </Card.Body>
      </Card>

      {/* Text Sizes & Weights */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Body Text Scale & Formatting</Title>
        </Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Group gap="lg" align="center">
              <Text size="xs">Text XS (0.75rem / 12px)</Text>
              <Text size="sm">Text SM (0.875rem / 14px)</Text>
              <Text size="md">Text MD (1rem / 16px - Default)</Text>
              <Text size="lg">Text LG (1.125rem / 18px)</Text>
              <Text size="xl">Text XL (1.25rem / 20px)</Text>
            </Group>
            <Divider />
            <Group gap="md">
              <Text weight={400}>Weight 400 (Regular)</Text>
              <Text weight={500}>Weight 500 (Medium)</Text>
              <Text weight={600}>Weight 600 (Semibold)</Text>
              <Text weight={700}>Weight 700 (Bold)</Text>
            </Group>
            <Divider />
            <Group gap="md">
              <Text italic>Italic text</Text>
              <Text underline>Underlined text</Text>
              <Text strikethrough>Strikethrough text</Text>
              <Text underline strikethrough>Underline + Strikethrough</Text>
            </Group>
            <Divider />
            <Group gap="sm">
              <Text color="primary">Primary</Text>
              <Text color="secondary">Secondary</Text>
              <Text color="success">Success</Text>
              <Text color="warning">Warning</Text>
              <Text color="danger">Danger</Text>
              <Text color="info">Info</Text>
              <Text color="dimmed">Dimmed</Text>
            </Group>
            <Divider />
            <Box padding="sm" bg="app" radius="sm">
              <Text weight={600} size="sm">Line Clamping (Truncate = {truncateLines}):</Text>
              <Text truncate={truncateLines} size="sm">
                Sans-UI provides a comprehensive, unified design system engineered for high-performance React applications.
                With strict TypeScript interfaces, responsive Flexbox and CSS Grid layout orchestrators, full color palettes,
                and seamless theme switching, developers can rapidly build accessible, robust web experiences.
              </Text>
              <Group gap="xs" style={{ marginTop: '8px' }}>
                <Badge variant="outline" style={{ cursor: 'pointer' }} onClick={() => setTruncateLines(1)}>1 Line</Badge>
                <Badge variant="outline" style={{ cursor: 'pointer' }} onClick={() => setTruncateLines(2)}>2 Lines</Badge>
                <Badge variant="outline" style={{ cursor: 'pointer' }} onClick={() => setTruncateLines(3)}>3 Lines</Badge>
              </Group>
            </Box>
          </Stack>
        </Card.Body>
      </Card>

      {/* Dividers */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Divider Variants & Thickness</Title>
        </Card.Header>
        <Card.Body>
          <Stack gap="lg">
            <Box>
              <Text size="xs" color="dimmed">Solid (1px, default)</Text>
              <Divider variant="solid" size={1} />
            </Box>
            <Box>
              <Text size="xs" color="dimmed">Dashed with Label (2px)</Text>
              <Divider variant="dashed" size={2} label="OR CONTINUE WITH" color="primary" />
            </Box>
            <Box>
              <Text size="xs" color="dimmed">Dotted (4px, Danger)</Text>
              <Divider variant="dotted" size={4} color="danger" label="CRITICAL SECTION" />
            </Box>
            <Box>
              <Text size="xs" color="dimmed">Vertical Divider in Flex Row</Text>
              <Group gap="md" align="center" style={{ height: '36px' }}>
                <Text size="sm">First Item</Text>
                <Divider orientation="vertical" size={2} color="border" />
                <Text size="sm">Second Item</Text>
                <Divider orientation="vertical" size={2} color="primary" />
                <Text size="sm">Third Item</Text>
              </Group>
            </Box>
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );
};
