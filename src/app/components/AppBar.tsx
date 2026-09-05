import React from "react";
import { Group } from "@/components/Group";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { Badge } from "@/components/Badge";
import { useTheme } from "@/theme";
import { IconButton } from "@/components/IconButton";
import { Moon, Sun } from "lucide-react";

export const AppBar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();


    return (
        <div className="appbar">
            <div className="appbar-content">
                <Group>
                    <Title order={1} size="h3" color="primary">Origo</Title>
                    <Badge size="xs"><Text variant="mono" size="xs">v0.1.0</Text></Badge>
                </Group>
                <Group>
                    <Button variant="outline" size="sm">Ayuda</Button>
                    <Button variant="outline" size="sm">Login</Button>
                    <IconButton icon={theme === 'dark' ? <Sun /> : <Moon />} color="primary" aria-label="Cambiar tema" onClick={() => (toggleTheme())} />
                </Group>
            </div>
        </div>
    )
}