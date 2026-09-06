import React from "react";
import { Group } from "@/components/Group";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Badge } from "@/components/Badge";
import { useTheme } from "@/theme";
import { IconButton } from "@/components/IconButton";
import { HelpCircle, LogIn, Menu, Moon, Sun } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { Popover } from "@/components/Popover";
import { Stack } from "@/components/Stack";

interface ActionButtonsProps {
  isMobile?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ isMobile }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        fullWidth={isMobile}
        rightSection={<HelpCircle size={18} />}
      >
        Ayuda
      </Button>
      <Button
        variant="outline"
        size="sm"
        fullWidth={isMobile}
        rightSection={<LogIn size={18} />}
      >
        Login
      </Button>
      <Button
        variant="outline"
        size="sm"
        fullWidth={isMobile}
        rightSection={theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        onClick={toggleTheme}
      >
        Tema
      </Button>
    </>
  );
};

export const AppBar: React.FC = () => {
  // Mobile breakpoint (collapse to Popover menu on smaller viewports)
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="appbar">
      <div className="appbar-content">
        <Group align="center">
          <Title order={1} size="h3" color="primary">
            Origo
          </Title>
          <Badge size="xs">
            <Text variant="mono" size="xs">
              v0.1.0
            </Text>
          </Badge>
        </Group>

        <Group align="center">
          {isMobile ? (
            <Popover position="bottom-end" shadow="md" withArrow>
              <Popover.Target>
                <IconButton
                  icon={<Menu size={20} />}
                  color="primary"
                  variant="outline"
                  aria-label="Menú"
                />
              </Popover.Target>
              <Popover.Dropdown>
                <Stack gap="xs" style={{ width: "160px" }}>
                  <ActionButtons isMobile />
                </Stack>
              </Popover.Dropdown>
            </Popover>
          ) : (
            <Group gap="xs">
              <ActionButtons />
            </Group>
          )}
        </Group>
      </div>
    </div>
  );
};
