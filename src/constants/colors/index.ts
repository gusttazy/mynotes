/**
 * Arquivo de Cores
 * 
 * Este arquivo define todas as cores utilizadas no aplicativo.
 * As cores são organizadas por contexto de uso e seguem um padrão de nomenclatura.
 */
export const colors = {
  // Cores principais
  roxoPrincipal: "#6246ea",    // Cor principal do app
  roxoSecundario: "#a69fca",   // Cor secundária para textos e elementos menos importantes
  
  // Cores de fundo
  cardsFundo: "#f9f8ff",       // Cor de fundo dos cards
  background: "#fffffe",        // Cor de fundo principal
  
  // Cores de texto
  texto: "#756e98",            // Cor principal do texto
  textoCortado: "#d2d0dc",     // Cor para texto riscado/desativado
  
  // Cores de ação
  vermelhoBotao: "#FF0000",    // Cor para botões de ação negativa
  white: "#FFFFFF",            // Cor para textos em fundos escuros
};

export type Colors = typeof colors; 