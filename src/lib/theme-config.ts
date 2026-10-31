// Zentro Global — Theme Configuration
// Brand tokens extracted from the logo (gold on white / obsidian dark)

export const ZENTRO_THEME = {
  colors: {
    gold: {
      primary: "#D4AF37",
      highlight: "#F5D77F",
      bronze: "#8C6D23",
      gradient: "linear-gradient(135deg, #8C6D23 0%, #D4AF37 50%, #F5D77F 100%)",
    },
    dark: {
      canvas: "#07090E",
      surface: "rgba(15, 23, 42, 0.75)",
      border: "rgba(212, 175, 55, 0.22)",
      text: "#F8FAFC",
      muted: "#94A3B8",
    },
    light: {
      canvas: "#FAFAFC",
      surface: "rgba(255, 255, 255, 0.90)",
      border: "rgba(212, 175, 55, 0.35)",
      text: "#0F172A",
      muted: "#475569",
    },
  },
  fonts: {
    heading: '"Cinzel", "Cormorant Garamond", Georgia, serif',
    body: '"Plus Jakarta Sans", "Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  verticals: {
    matrixx: "#D4AF37",
    it: "#3B82F6",
    vintology: "#9A3412",
    skyland: "#0D9488",
    mart: "#15803D",
    ayses: "#BE185D",
  },
} as const;

export type ZentroTheme = typeof ZENTRO_THEME;
