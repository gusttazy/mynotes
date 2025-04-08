const COLORS = {
  roxoPrincipal: "#6246ea",
  roxoSecundario: "#a69fca",
  cardsFundo: "#f9f8ff",
  texto: "#756e98",
  textoCortado: "#d2d0dc",
  background: "#fffffe",
  vermelhoBotao: "#FF0000",
} as const;

const FONTS = {
  regular: "Raleway_400Regular",
  medium: "Raleway_500Medium",
  semiBold: "Raleway_600SemiBold",
  bold: "Raleway_700Bold",
  extraBold: "Raleway_800ExtraBold",
} as const;

const theme = {
  colors: COLORS,
  fonts: FONTS,
} as const;

export type Theme = typeof theme;
export default theme;
