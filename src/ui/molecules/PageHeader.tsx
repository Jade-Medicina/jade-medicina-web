"use client";

import type { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "@/ui/atoms/Primitives";

// Encabezado verde petróleo de las páginas internas.
export const PageHeaderSection = styled.section`
  background: ${({ theme }) => theme.colors.cover};
  color: ${({ theme }) => theme.colors.onDark};
  padding: 2.5rem 0;

  h1 { color: ${({ theme }) => theme.colors.white}; margin: 0 0 .5rem; }
  p { max-width: 60ch; margin: 0 0 .75rem; }
`;

interface PageHeaderProps {
  title: string;
  text?: string;
  titleId?: string;
  children?: ReactNode;
}

export const PageHeader = ({ title, text, titleId = "titulo-pagina", children }: PageHeaderProps) => (
  <PageHeaderSection aria-labelledby={titleId}>
    <Container>
      <h1 id={titleId}>{title}</h1>
      {text && <p>{text}</p>}
      {children}
    </Container>
  </PageHeaderSection>
);

export default PageHeader;
