import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="Footer">
            This project was coded by {""}
            <a
                href="https://github.com/katyschulga"
                target="_blank"
                rel="noreferrer">
                Katy Schulga {""}
            </a>
            and {""}
            <a
                href="https://github.com/katyschulga/full-weather-app"
                target="_blank"
                rel="noreferrer">
                is open sourced on GitHub {""}
            </a>
            , hosted on {""}
            <a
                href="https://weatherbyschulga.netlify.app/"
                target="_blank"
                rel="noreferrer">
                Netlify {""}
            </a>
        </footer>
    );
}
