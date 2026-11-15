"use client";

import styled, { css } from "styled-components";

// Título de sección con los dos puntos (turquesa y verde menta) del diseño.
const Wrapper = styled.div<{ $compact: boolean }>`
  display: grid;
  gap: .5rem;
  margin-bottom: 2rem;

  h2 { margin: 0; }
  h2::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: -16px 0 0 ${({ theme }) => theme.colors.secondary};
    margin: 0 .75rem .25rem 16px;
    vertical-align: middle;
  }
  p { margin: 0; max-width: 60ch; }

  ${({ $compact }) =>
    $compact &&
    css`
      h2 { font-size: clamp(1.3rem, 3vw, 1.6rem); font-weight: 700; }
    `}
`;

interface SectionTitleProps {
  title: string;
  text?: string;
  id?: string;
  /** Tamaño reducido para los bloques internos de cada servicio. */
  compact?: boolean;
}

export const SectionTitle = ({ title, text, id, compact = false }: SectionTitleProps) => (
  <Wrapper $compact={compact}>
    <h2 id={id}>{title}</h2>
    {text && <p>{text}</p>}
  </Wrapper>
);

export default SectionTitle;
