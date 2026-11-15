"use client";

import styled from "styled-components";
import { Icon } from "./Icon";
import type { IconName } from "@/models/content.model";

// Átomos de estilo sin lógica: contenedor, etiqueta, círculo de ícono, lista con checks y enlace de salto.

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1rem;
`;

/** Etiqueta en verde menta. */
export const Tag = styled.p`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.titles};
  border-radius: ${({ theme }) => theme.radius.pill};
  padding: .3rem .85rem;
  font: 600 .8rem ${({ theme }) => theme.fonts.titles};
  margin: 0 0 1rem;
`;

const Circle = styled.span`
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.accent};

  svg { width: 24px; height: 24px; }
`;

export const IconCircle = ({ name, className }: { name: IconName; className?: string }) => (
  <Circle className={className}>
    <Icon name={name} />
  </Circle>
);

/** Lista con viñetas de check en verde menta. */
export const CheckList = styled.ul`
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;

  li { position: relative; padding: .35rem 0 .35rem 2rem; }
  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: .55rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.secondary}
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23454545' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 12l4 4 8-8'/%3E%3C/svg%3E")
      center / 70% no-repeat;
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  left: -999px;
  top: 0;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: .5rem 1rem;
  z-index: 200;

  &:focus { left: 1rem; color: ${({ theme }) => theme.colors.white}; }
`;

/** Lista sin viñetas ni márgenes. */
export const PlainList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

/** Botones en fila que se envuelven. */
export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
`;
