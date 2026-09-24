// src/context/ThemeContext.js

import React, { createContext, useContext, useState } from "react";

import { useColorScheme } from "react-native";

import { themeColors } from "../theme/themeColors";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Détection du thème du téléphone par défaut

  const systemColorScheme = useColorScheme();

  const [themeMode, setThemeMode] = useState(systemColorScheme || "light");

  // Fonction pour basculer entre Light et Dark

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = themeColors[themeMode];

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour accéder au thème facilement

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme doit être utilisé à l'intérieur d'un ThemeProvider",
    );
  }

  return context;
};
