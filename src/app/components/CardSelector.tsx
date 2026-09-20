import { Avatar } from "@/components/Avatar";
import { Card, CardBody } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Stack } from "@/components/Stack";
import { Text } from "@/components/Text";
import { RadiusScale } from "@/types";
import React, { useState } from "react";


interface CardSelectorProps {
    title: string
    info: string
    color: string
    avatarRadius?: RadiusScale
    onClick: () => void
}

export const CardSelector: React.FC<CardSelectorProps> = ({ title, info, color, avatarRadius = "md", onClick }) => {
    const [hoverState, updateHoverState] = useState(true)
    const handleMouseEnter = () => {
        updateHoverState(true)
    }
    const handleMouseLeave = () => {
        updateHoverState(false)
    }
    const style = {
        width: "100%",
        minHeight: "142px",
        backgroundColor: hoverState ? color : "",
        transition: hoverState ? "background-color 400ms" : undefined,
    }

    return (
        <Card shadow="xs" padding="xs" onClick={onClick} style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <CardBody style={{ height: "100%", display: "flex" }}>
                <Grid>
                    <Grid.Col span={1} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Avatar name={title} radius={avatarRadius} style={{ backgroundColor: color }} />
                    </Grid.Col>
                    <Grid.Col span={11} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Stack gap="xs">
                            <Text size="sm" color="inherit">{title}</Text>
                            <Text size="xs" color="dimmed">{info}</Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </CardBody>
        </Card>
    )
}