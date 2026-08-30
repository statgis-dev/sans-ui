import React, { useState } from 'react';
import {
  Title, Text, TextField, NumberInput, Select, Switch,
  DatePicker, DateRangePicker, Box, Stack, Group, Card, Badge, Button
} from '../../index';
import type { DateRange } from 'react-day-picker';

export const FormsSection: React.FC = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // Form State
  const [name, setName] = useState('Sebastián Narváez');
  const [email, setEmail] = useState('sebastian@example.com');
  const [age, setAge] = useState<number | ''>(28);
  const [role, setRole] = useState<string | null>('admin');
  const [notifications, setNotifications] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | null>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const roles = [
    { label: 'Administrator', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' },
    { label: 'Archived Role (Disabled)', value: 'archived', disabled: true },
  ];

  return (
    <Stack gap="xl">
      <Box>
        <Title order={2} size="h2">Data Capture (Forms)</Title>
        <Text color="dimmed" size="sm">
          Controlled and uncontrolled form controls with standardized error, label, and description wrappers.
        </Text>
      </Box>

      {/* State Controls */}
      <Card withBorder shadow="xs">
        <Card.Body>
          <Group gap="lg" align="center">
            <Switch label="Toggle Validation Errors" checked={showErrors} onChange={(e) => setShowErrors(e.target.checked)} />
            <Switch label="Toggle Disabled State" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
          </Group>
        </Card.Body>
      </Card>

      {/* Main Interactive Form */}
      <Card withBorder shadow="sm">
        <Card.Header>
          <Title order={3} size="h4">Interactive Form State</Title>
          <Badge variant="light" color="primary">Controlled Inputs</Badge>
        </Card.Header>
        <Card.Body>
          <Stack gap="lg">
            <Group gap="md" grow>
              <TextField
                label="Full Name"
                description="Enter your legal first and last name"
                placeholder="e.g. Jane Doe"
                required
                value={name}
                disabled={disabled}
                error={showErrors && !name ? 'Full name is required' : undefined}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                label="Email Address"
                description="Account verification link will be sent here"
                placeholder="user@domain.com"
                type="email"
                required
                value={email}
                disabled={disabled}
                error={showErrors && !email.includes('@') ? 'Enter a valid email address' : undefined}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Group>

            <Group gap="md" grow>
              <NumberInput
                label="Age (Years)"
                description="Minimum age is 18"
                min={18}
                max={120}
                value={age}
                disabled={disabled}
                error={showErrors && (typeof age !== 'number' || age < 18) ? 'Must be at least 18' : undefined}
                onChange={(val) => setAge(val !== undefined ? val : '')}
              />

              <Select
                label="Role"
                description="Assign system permissions"
                data={roles}
                searchable
                clearable
                required
                value={role ?? undefined}
                disabled={disabled}
                error={showErrors && !role ? 'Please select a role' : undefined}
                onChange={(val) => setRole(val)}
              />
            </Group>

            <Group gap="md" grow>
              <DatePicker
                label="Start Date"
                description="Single date picker popover"
                clearable
                value={startDate}
                disabled={disabled}
                error={showErrors && !startDate ? 'Start date is required' : undefined}
                onChange={(d) => setStartDate(d)}
              />

              <DateRangePicker
                label="Project Duration"
                description="Dual range calendar picker"
                clearable
                value={dateRange}
                disabled={disabled}
                onChange={(r) => setDateRange(r)}
              />
            </Group>

            <Switch
              label="Email Notifications"
              description="Receive weekly activity summaries"
              checked={notifications}
              disabled={disabled}
              color="success"
              onChange={(e) => setNotifications(e.target.checked)}
            />

            {/* Current State Output */}
            <Box padding="md" bg="app" radius="sm">
              <Text size="xs" color="dimmed" weight={600}>LIVE STATE JSON:</Text>
              <Text variant="mono" size="xs">
                {JSON.stringify({ name, email, age, role, notifications, startDate, dateRange }, null, 2)}
              </Text>
            </Box>
          </Stack>
        </Card.Body>
      </Card>
    </Stack>
  );
};
