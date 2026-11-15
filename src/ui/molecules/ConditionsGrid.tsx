"use client";

import styled from "styled-components";
import { IconCircle } from "@/ui/atoms/Primitives";

const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));

  li {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    align-items: center;
    gap: .75rem;
    overflow-wrap: break-word;
    hyphens: auto;
    background: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radius.card};
    box-shadow: ${({ theme }) => theme.shadows.base};
    padding: 1rem 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.titles};
  }
`;

const SmallCircle = styled(IconCircle)`
  width: 40px;
  height: 40px;

  svg { width: 20px; height: 20px; }
`;

// Condiciones que atiende un servicio, en tarjetas.
export const ConditionsGrid = ({ items }: { items: string[] }) => (
  <Grid>
    {items.map((item) => (
      <li key={item}>
        <SmallCircle name="check" />
        {item}
      </li>
    ))}
  </Grid>
);

export default ConditionsGrid;
