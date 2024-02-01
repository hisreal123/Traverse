"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  useLayoutEffect,
} from "react";

export type ThemeProps = "light" | "dark";
interface ThemeContextProps {
  theme: ThemeProps;

  setTheme: Dispatch<SetStateAction<ThemeProps>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeProps>("" as ThemeProps);

  useLayoutEffect(() => {
    const t = "%c \ud83d\udc9a Made by Phoenix \ud83d\udc9a",
      n = [
        "font-size: 12px",
        "color: #fffce1",
        "font-family: monospace",
        "background: #34CAA5",
        "display: inline-block",
        "padding: 1rem 3rem",
        "border: 1px solid #fffce1",
        "border-radius: 4px;",
      ].join(";");
    console.log(t, n);

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  useLayoutEffect(() => {
    if ("theme" in localStorage) {
      setTheme(localStorage.getItem("theme") as ThemeProps);
    }
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

// Custom hook to access the ThemeProps context
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }

  return context;
}
