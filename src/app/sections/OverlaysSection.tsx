import React, { useState } from 'react';
import { Title, Text, Modal, Tooltip, Loader, Button, Box, Divider, Stack, Group, Card, Badge, type ModalSize } from '../../index';

export const OverlaysSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ModalSize>('md');

  const openModalWithSize = (sz: ModalSize) => {
    setModalSize(sz);
    setModalOpen(true);
  };

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} size="h2">Overlays & Feedback</Title>
        <Text color="dimmed" size="sm">
          Portal-based accessible dialogs, floating tooltips with arrow pointers, and animated SVG loaders.
        </Text>
      </Box>

      {/* Modal Dialog */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Modal (Dialog Overlay)</Title>
          <Badge variant="light" color="primary">React Portals</Badge>
        </Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Text size="sm" color="dimmed">
              Modal renders via <Text as="span" variant="mono" size="xs">createPortal</Text> at the DOM root, features backdrop blur, escape/click-outside triggers, and body scroll lock.
            </Text>
            <Group gap="sm">
              <Button size="sm" variant="outline" onClick={() => openModalWithSize('xs')}>Open XS (320px)</Button>
              <Button size="sm" variant="outline" onClick={() => openModalWithSize('sm')}>Open SM (440px)</Button>
              <Button size="sm" variant="filled" color="primary" onClick={() => openModalWithSize('md')}>Open MD (560px - Default)</Button>
              <Button size="sm" variant="outline" onClick={() => openModalWithSize('lg')}>Open LG (720px)</Button>
              <Button size="sm" variant="outline" onClick={() => openModalWithSize('xl')}>Open XL (960px)</Button>
            </Group>
          </Stack>
        </Card.Body>
      </Card>

      {/* The Actual Modal Instance */}
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Sample Modal Dialog"
        size={modalSize}
      >
        <Stack gap="md">
          <Text size="sm">
            This is a <Text as="span" weight={600}>{modalSize.toUpperCase()}</Text> modal dialog. It is vertically and horizontally centered with backdrop blur.
          </Text>
          <Text size="xs" color="dimmed">
            Press <Text as="span" variant="mono">Escape</Text> or click outside the dialog to dismiss.
          </Text>
          <Group justify="flex-end" gap="sm" style={{ marginTop: '12px' }}>
            <Button variant="subtle" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button color="primary" size="sm" onClick={() => setModalOpen(false)}>Confirm Action</Button>
          </Group>
        </Stack>
      </Modal>

      {/* Tooltip Component */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">Tooltip Component</Title></Card.Header>
        <Card.Body>
          <Stack gap="lg">
            <Text size="sm" color="dimmed">Hover or focus each button to inspect tooltips with directional arrows:</Text>
            <Group gap="md">
              <Tooltip label="Top tooltip tooltip" position="top">
                <Button variant="outline" size="sm">Hover Top</Button>
              </Tooltip>

              <Tooltip label="Right tooltip text" position="right">
                <Button variant="outline" size="sm">Hover Right</Button>
              </Tooltip>

              <Tooltip label="Bottom tooltip text" position="bottom">
                <Button variant="outline" size="sm">Hover Bottom</Button>
              </Tooltip>

              <Tooltip label="Left tooltip text" position="left">
                <Button variant="outline" size="sm">Hover Left</Button>
              </Tooltip>
            </Group>
          </Stack>
        </Card.Body>
      </Card>

      {/* Loader Component */}
      <Card withBorder shadow="sm">
        <Card.Header><Title order={3} size="h4">Loader Variants & Animations</Title></Card.Header>
        <Card.Body>
          <Stack gap="md">
            <Group gap="xl" align="center">
              <Box style={{ textAlign: 'center' }}>
                <Loader variant="spinner" size="lg" color="primary" />
                <Text size="xs" color="dimmed" style={{ marginTop: '6px' }}>Spinner</Text>
              </Box>
              <Box style={{ textAlign: 'center' }}>
                <Loader variant="dots" size="lg" color="secondary" />
                <Text size="xs" color="dimmed" style={{ marginTop: '6px' }}>Dots</Text>
              </Box>
              <Box style={{ textAlign: 'center' }}>
                <Loader variant="bars" size="lg" color="success" />
                <Text size="xs" color="dimmed" style={{ marginTop: '6px' }}>Bars</Text>
              </Box>
            </Group>
            <Divider />
            <Group gap="md" align="center">
              <Text size="sm" color="dimmed">Sizes:</Text>
              <Loader variant="spinner" size="xs" color="primary" />
              <Loader variant="spinner" size="sm" color="primary" />
              <Loader variant="spinner" size="md" color="primary" />
              <Loader variant="spinner" size="lg" color="primary" />
              <Loader variant="spinner" size="xl" color="primary" />
            </Group>
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );
};
