import React, { useState } from 'react';
import { Title, Text, Button, IconButton, Divider, Box, Stack, Group, Card, Badge, Switch } from '../../index';

export const ActionsSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const starIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const arrowRightIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const trashIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );

  const heartIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} size="h2">Actions & Navigation</Title>
        <Text color="dimmed" size="sm">
          Interactive buttons and icon-only triggers with accessible focus states, loading spinners, and visual hierarchy.
        </Text>
      </Box>

      {/* Global Interactive Controls */}
      <Card withBorder shadow="xs">
        <Card.Body>
          <Group gap="lg" align="center">
            <Switch label="Loading State" checked={loading} onChange={(e) => setLoading(e.target.checked)} />
            <Switch label="Disabled State" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            <Badge variant="light" color="primary">Clicks: {clickCount}</Badge>
            <Button size="xs" variant="outline" onClick={() => setClickCount(0)}>Reset Counter</Button>
          </Group>
        </Card.Body>
      </Card>

      {/* Variants Matrix */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">Button Variants</Title></Card.Header>
        <Card.Body>
          <Stack gap="md">
            {(['primary', 'secondary', 'neutral', 'success', 'warning', 'danger'] as const).map((color) => (
              <Group key={color} gap="sm" align="center">
                <Box style={{ width: '90px' }}><Text size="xs" weight={600} style={{ textTransform: 'capitalize' }}>{color}</Text></Box>
                <Button color={color} variant="filled" loading={loading} disabled={disabled} onClick={() => setClickCount(c => c + 1)}>Filled</Button>
                <Button color={color} variant="light" loading={loading} disabled={disabled} onClick={() => setClickCount(c => c + 1)}>Light</Button>
                <Button color={color} variant="outline" loading={loading} disabled={disabled} onClick={() => setClickCount(c => c + 1)}>Outline</Button>
                <Button color={color} variant="subtle" loading={loading} disabled={disabled} onClick={() => setClickCount(c => c + 1)}>Subtle</Button>
                <Button color={color} variant="link" loading={loading} disabled={disabled} onClick={() => setClickCount(c => c + 1)}>Link</Button>
              </Group>
            ))}
          </Stack>
        </Card.Body>
      </Card>

      {/* Sizes & Sections */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">Sizes & Icon Sections</Title></Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Group gap="sm" align="center">
              <Button size="xs" color="primary" leftSection={starIcon}>Extra Small</Button>
              <Button size="sm" color="primary" leftSection={starIcon}>Small</Button>
              <Button size="md" color="primary" leftSection={starIcon} rightSection={arrowRightIcon}>Medium (Default)</Button>
              <Button size="lg" color="primary" rightSection={arrowRightIcon}>Large</Button>
              <Button size="xl" color="primary" rightSection={arrowRightIcon}>Extra Large</Button>
            </Group>
            <Divider />
            <Button fullWidth color="primary" size="md">Full Width Button</Button>
          </Stack>
        </Card.Body>
      </Card>

      {/* Icon Buttons */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">IconButton Component</Title></Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Group gap="md" align="center">
              <Text size="sm" color="dimmed">Sizes (xs to xl):</Text>
              <IconButton icon={heartIcon} aria-label="Like" size="xs" color="danger" variant="light" radius="full" />
              <IconButton icon={heartIcon} aria-label="Like" size="sm" color="danger" variant="light" radius="full" />
              <IconButton icon={heartIcon} aria-label="Like" size="md" color="danger" variant="light" radius="full" />
              <IconButton icon={heartIcon} aria-label="Like" size="lg" color="danger" variant="light" radius="full" />
              <IconButton icon={heartIcon} aria-label="Like" size="xl" color="danger" variant="light" radius="full" />
            </Group>
            <Divider />
            <Group gap="md">
              <IconButton icon={trashIcon} aria-label="Delete" color="danger" variant="filled" />
              <IconButton icon={trashIcon} aria-label="Delete" color="danger" variant="light" />
              <IconButton icon={trashIcon} aria-label="Delete" color="danger" variant="outline" />
              <IconButton icon={trashIcon} aria-label="Delete" color="danger" variant="subtle" />
            </Group>
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );
};
