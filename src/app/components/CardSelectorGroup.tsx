import React from "react";
import { Grid } from "@/components/Grid";
import { CardSelector } from "./CardSelector";

export const CardSelectorGroup: React.FC = () => {
    return (
        <Grid>
            <Grid.Col span={12} md={6}>
                <CardSelector
                    title="Sebástian Narváez"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae finibus mauris. Sed posuere purus quis erat ultricies, at mollis arcu volutpat."
                    color="#bae1ff"
                    onClick={() => console.log("Sebs")}
                />
            </Grid.Col>
            <Grid.Col span={12} md={6}>
                <CardSelector
                    title="Probando Cosas"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae finibus mauris. Sed posuere purus quis erat ultricies, at mollis arcu volutpat."
                    color="#e285b4"
                    onClick={() => console.log("Test")}
                />
            </Grid.Col>
        </Grid>
    )
}