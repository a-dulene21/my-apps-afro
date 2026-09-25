// src/theme/themeColors.js

export const themeColors = {
  // --- PALETTE CLAIRE (Default - Luxe Royal & Champagne) ---

  light: {
    mode: "light",

    // Fonds d'écran
    background: "#FBFBFD", // Blanc Albâtre / Nacre
    surface: "#FFFFFF", // Blanc pur pour les cartes
    surfaceSubtle: "#F3F4F6", // Zones secondaires

    // Couleurs Principales (Marque SHEFA)
    primary: "#0F2C59", // Bleu Saphir / Royal
    primaryHover: "#1D3557",
    onPrimary: "#FFFFFF", // Texte sur fond bleu
    secondary: "#D4AF37", // Or Champagne
    onSecondary: "#0B132B", // Texte sur fond or
    tertiary: "#E07A5F", // Ambre Chaud / Accents
    onTertiary: "#FFFFFF",

    //Buttons & Interactions
    primaryButton: "#0F2C59", // Bleu Saphir
    secondaryButton: "#5c4e65", // Gris Foncé
    tertaireButton: "#8D99AE", // Gris Clair

    // Typographie & Textes
    textPrimary: "#0B132B", // Bleu Nuit Profond
    textSecondary: "#4A5568", // Gris Moyen
    textMuted: "#9CA3AF", // Placeholders & icônes inactives

    // Bordures & Séparateurs
    border: "#E5E7EB",

    // États
    success: "#10B981", // PIN Validé / Profil Vérifié
    error: "#EF4444", // Annulations / Erreurs
    warning: "#F59E0B", // Étoiles de notation ★
    info: "#3B82F6", // Notifications d'information
  },

  // --- PALETTE SOMBRE (Mode Nuit optionnel) ---

  dark: {
    mode: "dark",

    background: "#0B132B", // Nuit Profonde

    surface: "#1C2541", // Cartes sombres

    surfaceSubtle: "#3A506B",

    primary: "#3A86FF", // Bleu Vibrant

    primaryHover: "#60A5FA",

    onPrimary: "#FFFFFF",

    secondary: "#FFD166", // Jaune Or Lumineux

    onSecondary: "#0B132B",

    tertiary: "#FF6B6B",

    onTertiary: "#FFFFFF",

    textPrimary: "#F8FAFC",

    textSecondary: "#CBD5E1",

    textMuted: "#64748B",

    border: "#334155",

    success: "#34D399",

    error: "#F87171",

    warning: "#FBBF24",
  },
};
