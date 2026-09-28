import { useState, useEffect } from "react";

export type ThemeType = "dark" | "light" | "neon" | "eduardo";

const STORAGE_KEY = "eduardo-portfolio-theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeType;
      if (savedTheme) return savedTheme;
    }
    return "eduardo";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("@portfolio:theme", newTheme);
};

  return { theme, toggleTheme };
}