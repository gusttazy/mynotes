/**
 * Arquivo de Tema
 * 
 * Este arquivo combina as cores e fontes do aplicativo em um único tema.
 * Ele serve como ponto central para acessar todas as constantes de estilo.
 */
import { colors, Colors } from "./colors";
import { fonts, Fonts } from "./fonts";

const theme = {
  colors,
  fonts,
};

export type Theme = {
  colors: Colors;
  fonts: Fonts;
};

export default theme; 