import React, { useState } from 'react';
import { Title, Text, Avatar, Image, Badge, Card, Box, Divider, Stack, Group, Button, Switch } from '../../index';

export const MediaSection: React.FC = () => {
  const [brokenImage, setBrokenImage] = useState(false);

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} size="h2">Data Display & Media</Title>
        <Text color="dimmed" size="sm">
          Avatars with initials fallback, error-tolerant image containers, status badges, and modular compound cards.
        </Text>
      </Box>

      {/* Avatars */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">Avatar Component</Title></Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Group gap="md" align="center">
              <Text size="sm" color="dimmed">Sizes (xs to xl):</Text>
              <Avatar size="xs" name="Sebastián Narváez" />
              <Avatar size="sm" name="Jane Doe" color="primary" />
              <Avatar size="md" name="Alex Morgan" color="success" />
              <Avatar size="lg" name="Carlos Sainz" color="warning" />
              <Avatar size="xl" name="Max Verstappen" color="info" />
            </Group>
            <Divider />
            <Group gap="md" align="center">
              <Text size="sm" color="dimmed">Custom Image & Radius:</Text>
              <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" radius="full" size="lg" />
              <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" radius="md" size="lg" />
              <Avatar name="Auto Color 1" color="auto" size="lg" />
              <Avatar name="Auto Color 2" color="auto" size="lg" />
              <Avatar size="lg" /> {/* Default fallback icon */}
            </Group>
          </Stack>
        </Card.Body>
      </Card>

      {/* Image with Fallback Simulation */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Image with Error Fallback (Spec Section 8.1)</Title>
          <Switch
            label="Simulate Broken URL"
            checked={brokenImage}
            onChange={(e) => setBrokenImage(e.target.checked)}
          />
        </Card.Header>
        <Card.Body>
          <Group gap="lg" align="flex-start">
            <Box style={{ width: '280px' }}>
              <Text size="xs" color="dimmed" style={{ marginBottom: '8px' }}>Image (fit: cover, radius: md)</Text>
              <Image
                src={brokenImage ? "https://invalid-broken-url.xyz/img.jpg" : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"}
                alt="Mountain landscape"
                fit="cover"
                radius="md"
                height={180}
                fallback={
                  <Box padding="lg" style={{ textAlign: 'center' }}>
                    <Text size="sm" weight={600} color="danger">Failed to load image</Text>
                    <Text size="xs" color="dimmed">Custom fallback component rendered</Text>
                  </Box>
                }
              />
            </Box>

            <Box style={{ flex: 1 }}>
              <Text size="sm" weight={600}>Section 8.1 Implementation Verification:</Text>
              <Text size="sm" color="dimmed">
                1. Maintains local <Text as="span" variant="mono" size="xs">hasError</Text> state (initialized to false).<br />
                2. Listens to native <Text as="span" variant="mono" size="xs">onError</Text> event on <Text as="span" variant="mono" size="xs">&lt;img&gt;</Text> tag.<br />
                3. Renders custom fallback node inside matching dimensions when triggered.
              </Text>
            </Box>
          </Group>
        </Card.Body>
      </Card>

      {/* Badges */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">Badges</Title></Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Group gap="sm">
              <Badge variant="filled" color="primary">Primary</Badge>
              <Badge variant="filled" color="secondary">Secondary</Badge>
              <Badge variant="filled" color="success">Active</Badge>
              <Badge variant="filled" color="warning">Pending</Badge>
              <Badge variant="filled" color="danger">Failed</Badge>
              <Badge variant="filled" color="info">Processing</Badge>
            </Group>
            <Group gap="sm">
              <Badge variant="light" color="primary">Light Primary</Badge>
              <Badge variant="outline" color="success">Outline Success</Badge>
              <Badge variant="dot" color="primary">Dot Primary</Badge>
              <Badge variant="dot" color="success">Dot Active</Badge>
              <Badge variant="dot" color="danger">Dot Error</Badge>
            </Group>
          </Stack>
        </Card.Body>
      </Card>

      {/* Compound Card */}
      <Card withBorder shadow="md">
        <Card.Header>
          <Title order={4} size="h5">Compound Card Pattern</Title>
          <Badge variant="light" color="success">Card.Header</Badge>
        </Card.Header>
        <Card.Body>
          <Text size="sm">
            This card is constructed using modular compound components (<Text as="span" variant="mono" size="xs">Card.Header</Text>, <Text as="span" variant="mono" size="xs">Card.Body</Text>, <Text as="span" variant="mono" size="xs">Card.Footer</Text>).
            Each subcomponent cleanly handles padding and boundary borders according to design system specifications.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="subtle" size="sm">Cancel</Button>
          <Button variant="filled" color="primary" size="sm">Confirm Action</Button>
        </Card.Footer>
      </Card>
    </Stack>
  );
};
