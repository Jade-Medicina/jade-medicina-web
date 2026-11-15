// Identidad visual de Jade (manual de marca básico, 07/11/2026). Fuente: documentacion/assets/marca.md
export const theme = {
  colors: {
    primary: "#00AEAC", // Turquesa: íconos, bordes y detalles (no para texto)
    secondary: "#8CCCB0", // Verde menta: botones claros, etiquetas, viñetas
    accent: "#007F7D", // Turquesa oscuro: botones y enlaces con texto (accesibilidad)
    accentHover: "#006765",
    titles: "#454545", // Gris oscuro: títulos, texto, bloques oscuros
    cover: "#003535", // Verde petróleo: portadas superiores
    background: "#FFFFFF",
    backgroundAlt: "#F2F8F6",
    text: "#454545",
    line: "#DDE6E2",
    white: "#FFFFFF",
    onDark: "#EDEDED",
    onDarkMuted: "#D9D9D9",
    footerLine: "#666666",
    secondarySoft: "rgba(140, 204, 176, .35)",
    secondaryFaint: "rgba(140, 204, 176, .2)",
    overlay: "rgba(69, 69, 69, .45)",
    onDarkLine: "rgba(255, 255, 255, .12)",
  },
  fonts: {
    titles: "var(--font-montserrat), \"Montserrat\", sans-serif",
    text: "var(--font-montserrat), \"Montserrat\", sans-serif",
  },
  radius: { base: "20px", card: "16px", soft: "14px", pill: "999px" },
  shadows: {
    base: "0 10px 34px rgba(69, 69, 69, .10)",
    hover: "0 14px 40px rgba(69, 69, 69, .16)",
    photo: "0 18px 40px rgba(0, 0, 0, .25)",
    floating: "0 8px 24px rgba(69, 69, 69, .3)",
  },
  gradients: { brand: "linear-gradient(180deg, #8CCCB0, #00AEAC)" },
  media: {
    sm: "@media (min-width: 640px)",
    md: "@media (min-width: 960px)",
    lg: "@media (min-width: 1100px)",
    reducedMotion: "@media (prefers-reduced-motion: reduce)",
  },
} as const;

export type AppTheme = typeof theme;
