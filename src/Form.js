import React from "react";
import "./Form.css";

export default function Form() {
    return (
        <div className="Form">
            <header>
                <form class="search-form" id="search-form">
                    <input
                        type="search"
                        placeholder="Enter a city..."
                        required
                        id="search-form-input"
                        class="search-form-input"
                    />
                    <input
                        type="submit"
                        value="Search"
                        class="search-form-button"
                    />
                </form>
            </header>
        </div>
    );
}
