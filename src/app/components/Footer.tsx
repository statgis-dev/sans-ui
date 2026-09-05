import React from "react";
import { format } from "date-fns";
import { Text } from "@/components/Text";


export const Footer: React.FC = () => {
    const today = new Date();
    const formattedDate = format(today, "yyyy");

    return (
        <div className="footer">
            <div className="footer-content">
                <Text size="xs" color="neutral">Corporación Autónoma Regional del Atlántico</Text>
                <Text size="xs" color="neutral">(c) {formattedDate}</Text>
            </div>
        </div>
    )
}