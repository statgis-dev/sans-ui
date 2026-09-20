import React from "react";

export const GovCo: React.FC = () => {
    return (
        <div className="barra-superior-govco" aria-label="Barra superior">
            <a href="https://www.gov.co/" target="_blank" aria-label="Portal del Estado Colombiano - GOV.CO">
                <img src="src/app/public/gov.svg" height={"36px"} />
            </a>
        </div>
    )
}