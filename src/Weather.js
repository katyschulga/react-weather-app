import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <main className="Weather">
            <div className="weather-app-data">
                <div>
                    <h1 className="weather-app-city" id="city">
                        Glasgow
                    </h1>
                    <p className="weather-app-details">
                        <span id="time">12.30</span>,
                        <span id="description"> it is windy</span>
                        <br />
                        Humidity: <strong id="humidity">54%</strong>, Wind
                        <strong id="wind">4.3km/h</strong>
                    </p>
                </div>

                <div className="weather-app-temperature-container">
                    <div id="icon">☀️</div>
                    <div className="weather-app-temperature" id="temperature">
                        10
                    </div>
                    <div className="weather-app-unit">ºC</div>
                </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
        </main>
    );
}
