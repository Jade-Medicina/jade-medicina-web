"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./GlobalStyles";

// Recoge los estilos generados en el servidor para evitar el parpadeo sin estilos.
export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  const content = (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );

  if (typeof window !== "undefined") return content;
  return <StyleSheetManager sheet={sheet.instance}>{content}</StyleSheetManager>;
}
