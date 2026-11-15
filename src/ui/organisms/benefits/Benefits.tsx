"use client";

import styled from "styled-components";
import { Container } from "@/ui/atoms/Primitives";
import { Icon } from "@/ui/atoms/Icon";
import { HOME } from "@/ui/content/home";

const Section = styled.section`
  && { padding: 0 0 2.75rem; }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1.5rem;
  display: grid;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 24px;

  li { display: flex; align-items: center; gap: .9rem; font-size: .95rem; color: ${({ theme }) => theme.colors.titles}; }
  svg { width: 40px; height: 40px; flex: none; color: ${({ theme }) => theme.colors.accent}; }

  ${({ theme }) => theme.media.sm} { grid-template-columns: repeat(2, 1fr); }
  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(4, 1fr);
    li + li { border-left: 1px solid ${({ theme }) => theme.colors.line}; padding-left: 1.25rem; }
  }
`;

// Franja de cuatro beneficios (frases con respaldo de la clienta, ronda 2).
export const Benefits = () => (
  <Section aria-label={HOME.benefitsLabel}>
    <Container>
      <List>
        {HOME.benefits.map((benefit) => (
          <li key={benefit.lines.join(" ")}>
            <Icon name={benefit.icon} />
            <span>
              {benefit.lines[0]}
              <br />
              {benefit.lines[1]}
            </span>
          </li>
        ))}
      </List>
    </Container>
  </Section>
);

export default Benefits;
