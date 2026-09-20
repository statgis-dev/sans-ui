import React from "react";
import { format } from "date-fns";
import { Text } from "@/components/Text";
import { useTheme } from "@/theme";


export const Footer: React.FC = () => {
    const { theme } = useTheme();
    const today = new Date();
    const formattedDate = format(today, "yyyy");

    return (
        <div className="footer">
            <div className="footer-content">
                <img src={theme === "dark" ? 'src/app/public/logo-negative.png' : 'src/app/public/logo.png'} height="64px" style={{ marginBottom: "8px" }} />
                <Text size="xs" color="neutral">Corporación Autónoma Regional del Atlántico</Text>
                <Text size="xs" color="neutral">© {formattedDate}</Text>
            </div>
        </div>
    )
}