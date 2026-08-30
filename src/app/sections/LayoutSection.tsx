import React, { useState } from 'react';
import { Title, Text, Box, Stack, Group, Grid, AspectRatio, Container, Card, Badge } from '../../index';

export const LayoutSection: React.FC = () => {
  const [columns, setColumns] = useState<number>(12);
  const [gutter, setGutter] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} size="h2">Layout & Structure</Title>
        <Text color="dimmed" size="sm">
          Polymorphic surfaces, Flexbox orchestrators, 12-column grid, and responsive aspect-ratio containers.
        </Text>
      </Box>

      {/* Grid Showcase */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Grid System (12/24 Columns)</Title>
          <Group gap="xs">
            <Badge variant="light" color="primary">Gutter: {gutter}</Badge>
            <Badge variant="outline" style={{ cursor: 'pointer' }} onClick={() => setGutter('xs')}>XS</Badge>
            <Badge variant="outline" style={{ cursor: 'pointer' }} onClick={() => setGutter('md')}>MD</Badge>
            <Badge variant="outline" style={{ cursor: 'pointer' }} onClick={() => setGutter('xl')}>XL</Badge>
          </Group>
        </Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Text size="sm" color="dimmed">Equal 3-column split (span=4 each):</Text>
            <Grid columns={12} gutter={gutter}>
              <Grid.Col span={4}>
                <Box padding="md" bg="primary" radius="sm"><Text weight={600} align="center">Col span 4</Text></Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box padding="md" bg="primary" radius="sm"><Text weight={600} align="center">Col span 4</Text></Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box padding="md" bg="primary" radius="sm"><Text weight={600} align="center">Col span 4</Text></Box>
              </Grid.Col>
            </Grid>

            <Text size="sm" color="dimmed">Asymmetric split (span=8 and span=4):</Text>
            <Grid columns={12} gutter={gutter}>
              <Grid.Col span={8}>
                <Box padding="md" bg="secondary" radius="sm"><Text weight={600} align="center">Main Area (span 8)</Text></Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box padding="md" bg="secondary" radius="sm"><Text weight={600} align="center">Sidebar (span 4)</Text></Box>
              </Grid.Col>
            </Grid>

            <Text size="sm" color="dimmed">Offset column (span=6 with offset=3):</Text>
            <Grid columns={12} gutter={gutter}>
              <Grid.Col span={6} offset={3}>
                <Box padding="md" bg="success" radius="sm"><Text weight={600} align="center">Centered with Offset 3 (span 6)</Text></Box>
              </Grid.Col>
            </Grid>

            <Text size="sm" color="dimmed">Responsive breakpoints (mobile span=12, tablet md=6, desktop lg=3):</Text>
            <Grid columns={12} gutter={gutter}>
              {[1, 2, 3, 4].map((i) => (
                <Grid.Col key={i} span={12} md={6} lg={3}>
                  <Box padding="sm" bg="neutral" radius="sm" border>
                    <Text size="xs" align="center">Card #{i} (12 &rarr; 6 &rarr; 3)</Text>
                  </Box>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Card.Body>
      </Card>

      {/* Stack & Group */}
      <Grid columns={12} gutter="md">
        <Grid.Col span={6}>
          <Card withBorder shadow="sm">
            <Card.Header><Title order={3} size="h5">Stack (VStack)</Title></Card.Header>
            <Card.Body>
              <Stack gap="sm">
                <Box padding="sm" bg="app" radius="xs"><Text size="xs">Item 1</Text></Box>
                <Box padding="sm" bg="app" radius="xs"><Text size="xs">Item 2</Text></Box>
                <Box padding="sm" bg="app" radius="xs"><Text size="xs">Item 3</Text></Box>
              </Stack>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card withBorder shadow="sm">
            <Card.Header><Title order={3} size="h5">Group (HStack - wrap & grow)</Title></Card.Header>
            <Card.Body>
              <Group gap="sm" grow>
                <Box padding="sm" bg="app" radius="xs"><Text size="xs" align="center">Grow 1</Text></Box>
                <Box padding="sm" bg="app" radius="xs"><Text size="xs" align="center">Grow 2</Text></Box>
                <Box padding="sm" bg="app" radius="xs"><Text size="xs" align="center">Grow 3</Text></Box>
              </Group>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Aspect Ratio & Container */}
      <Grid columns={12} gutter="md">
        <Grid.Col span={6}>
          <Card withBorder shadow="sm">
            <Card.Header><Title order={3} size="h5">AspectRatio (16 / 9)</Title></Card.Header>
            <Card.Body>
              <AspectRatio ratio={16 / 9}>
                <Box bg="primary" radius="sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Text weight={700} color="inherit">16:9 Aspect Ratio Container</Text>
                </Box>
              </AspectRatio>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card withBorder shadow="sm">
            <Card.Header><Title order={3} size="h5">AspectRatio (1 / 1 Square)</Title></Card.Header>
            <Card.Body>
              <Box style={{ maxWidth: '200px', margin: '0 auto' }}>
                <AspectRatio ratio={1}>
                  <Box bg="warning" radius="full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text weight={700} color="inherit">1:1 Circle</Text>
                  </Box>
                </AspectRatio>
              </Box>
            </Card.Body>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
