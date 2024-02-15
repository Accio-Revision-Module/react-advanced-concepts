import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const Themes = {
    MORNING: "morning",
    LIGHT: "light",
    EVENING: "evening",
    DARK: "dark",
}

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || Themes.DARK);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}