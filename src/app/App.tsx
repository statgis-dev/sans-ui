import React from "react";
import { AppBar } from "./components/AppBar";

import './App.modules.css';
import { Footer } from "./components/Footer";
import { GovCo } from "./components/GovCo";
import { Container } from "@/components/Container";
import { CardSelectorGroup } from "./components/CardSelectorGroup";

export const App: React.FC = () => {
    return (
        <div className="shell">
            <GovCo />
            <AppBar />
            <Container className="main">
                <CardSelectorGroup />
            </Container>
            <Footer />
        </div >
    )
}