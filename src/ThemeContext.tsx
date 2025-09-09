import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "dark_theme" | "light_theme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Load from localStorage or fallback to dark
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "dark_theme";
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark_theme" ? "light_theme" : "dark_theme"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id="top" className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// ✅ Custom hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
