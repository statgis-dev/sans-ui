import React from "react";
import { AppBar } from "./components/AppBar";

import './App.modules.css';
import { Footer } from "./components/Footer";
import { GovCo } from "./components/GovCo";

export const App: React.FC = () => {
    return (
        <div className="shell">
            <GovCo />
            <AppBar />
            <div className="main"></div>
            <Footer />
        </div>
    )
}