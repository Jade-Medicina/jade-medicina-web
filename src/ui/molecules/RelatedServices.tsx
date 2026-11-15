"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { IconCircle } from "@/ui/atoms/Primitives";
import type { RelatedService } from "@/models/content.model";
import { serviceHref } from "@/ui/content/services";

const List = styled.ul<{ $column: boolean }>`
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;
  display: grid;
  gap: 1rem;

  ${({ $column, theme }) =>
    !$column &&
    css`
      ${theme.media.sm} { grid-template-columns: repeat(2, 1fr); }
      ${theme.media.md} { grid-template-columns: repeat(3, 1fr); }
    `}
`;

const Item = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};
  padding: 1rem 1.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.titles};
  font: 600 1rem ${({ theme }) => theme.fonts.titles};
  height: 100%;

  small { display: block; font: 400 .85rem ${({ theme }) => theme.fonts.text}; color: ${({ theme }) => theme.colors.text}; }
`;

interface RelatedServicesProps {
  items: RelatedService[];
  /** Una sola columna (cuando va al lado de otra caja). */
  column?: boolean;
}

export const RelatedServices = ({ items, column = false }: RelatedServicesProps) => (
  <List $column={column}>
    {items.map((item) => (
      <li key={item.slug}>
        <Item href={serviceHref(item.slug)}>
          <IconCircle name="stethoscope" />
          <span>
            {item.title}
            <small>{item.detail}</small>
          </span>
        </Item>
      </li>
    ))}
  </List>
);

export default RelatedServices;
