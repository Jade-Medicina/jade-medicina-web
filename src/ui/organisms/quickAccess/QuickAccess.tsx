"use client";

import styled from "styled-components";
import { AppLink } from "@/ui/atoms/AppLink";
import { Container } from "@/ui/atoms/Primitives";
import { Icon } from "@/ui/atoms/Icon";
import { HOME } from "@/ui/content/home";

const Nav = styled.nav`
  position: relative;
  z-index: 3;
  margin-top: -1.25rem;
  padding-bottom: 1rem;

  ${({ theme }) => theme.media.md} { margin-top: -3rem; }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 28px;
  box-shadow: ${({ theme }) => theme.shadows.base};

  li + li { border-top: 1px solid ${({ theme }) => theme.colors.line}; }

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
    li + li { border-top: 0; }
    li:nth-child(n + 3) { border-top: 1px solid ${({ theme }) => theme.colors.line}; }
    li:nth-child(even) { border-left: 1px solid ${({ theme }) => theme.colors.line}; }
  }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(4, 1fr);
    li:nth-child(n) { border-top: 0; border-left: 1px solid ${({ theme }) => theme.colors.line}; }
    li:first-child { border-left: 0; }
  }
`;

const Item = styled(AppLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  strong { display: block; font: 600 1.05rem ${({ theme }) => theme.fonts.titles}; color: ${({ theme }) => theme.colors.titles}; }
`;

const ItemIcon = styled.span`
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.colors.accent};

  svg { width: 34px; height: 34px; }
`;

const Detail = styled.span`
  font-size: .92rem;
`;

// Barra de accesos rápidos bajo la portada de Inicio.
export const QuickAccess = () => (
  <Nav aria-label={HOME.quickAccessLabel}>
    <Container>
      <List>
        {HOME.quickAccess.map((item) => (
          <li key={item.title}>
            <Item href={item.href} external={"external" in item ? item.external : undefined}>
              <ItemIcon>
                <Icon name={item.icon} />
              </ItemIcon>
              <span>
                <strong>{item.title}</strong>
                <Detail>{item.detail}</Detail>
              </span>
            </Item>
          </li>
        ))}
      </List>
    </Container>
  </Nav>
);

export default QuickAccess;
