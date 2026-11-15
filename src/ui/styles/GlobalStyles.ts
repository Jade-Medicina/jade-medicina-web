"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after { box-sizing: border-box; }

  html { scroll-behavior: smooth; font-size: 93.75%; }

  [id] { scroll-margin-top: 84px; }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 1rem/1.65 ${({ theme }) => theme.fonts.text};
  }

  body.menu-open { overflow: hidden; }

  img { max-width: 100%; height: auto; display: block; }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.titles};
    line-height: 1.2;
    margin: 0 0 .5em;
  }

  h1 { font-size: clamp(1.75rem, 5vw, 2.5rem); font-weight: 900; }
  h2 { font-size: clamp(1.4rem, 3.5vw, 1.85rem); font-weight: 700; }
  h3 { font-size: 1.1rem; font-weight: 600; }

  p { margin: 0 0 1rem; }

  a { color: ${({ theme }) => theme.colors.accent}; }
  a:hover { color: ${({ theme }) => theme.colors.accentHover}; }

  :focus-visible { outline: 3px solid ${({ theme }) => theme.colors.primary}; outline-offset: 3px; }
  [tabindex="-1"]:focus { outline: none; }

  section { padding: 2.75rem 0; }

  ${({ theme }) => theme.media.reducedMotion} {
    html { scroll-behavior: auto; }
  }
`;

export default GlobalStyles;
