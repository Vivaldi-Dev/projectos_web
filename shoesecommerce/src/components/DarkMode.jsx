import React from 'react';
import LightButton from '@assets/website/light-mode-button.png';
import DarkButton from '@assets/website/dark-mode-button.png';

function DarkMode() {
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <img
                src={LightButton}
                alt="Light Mode"
                className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
                onClick={toggleTheme}
            />
            <img
                src={DarkButton}
                alt="Dark Mode"
                className={`w-12 cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`}
                onClick={toggleTheme}
            />
        </div>
    );
}

export default DarkMode;
