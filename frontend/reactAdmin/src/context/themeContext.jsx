import React, { createContext, useContext, useState} from "react";

export const useTheme = () => useContext(ThemeContext);

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [activeTheme, setActiveTheme] = useState(false);
    const toggleTheme = () => setActiveTheme((prev) => !prev);

    return(
        <ThemeContext.Provider value={{activeTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};