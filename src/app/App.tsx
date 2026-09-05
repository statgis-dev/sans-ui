import React from "react";
import { AppBar } from "./components/AppBar";

import './App.modules.css';
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
    return (
        <div className="shell">
            <AppBar />
            <div className="main"></div>
            <Footer />
        </div>
    )
}