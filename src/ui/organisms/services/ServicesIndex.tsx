"use client";

import styled from "styled-components";
import { Container } from "@/ui/atoms/Primitives";
import { IndexServiceCard } from "@/ui/molecules/ServiceCards";
import { SERVICES, SERVICES_PAGE } from "@/ui/content/services";

const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;

  ${({ theme }) => theme.media.sm} { grid-template-columns: repeat(2, 1fr); }
  ${({ theme }) => theme.media.md} { grid-template-columns: repeat(3, 1fr); }
  ${({ theme }) => theme.media.lg} { grid-template-columns: repeat(4, 1fr); }
`;

// Índice de servicios: una tarjeta por servicio que lleva a su página.
export const ServicesIndex = () => (
  <section aria-label={SERVICES_PAGE.indexLabel}>
    <Container>
      <Grid>
        {SERVICES.map((service) => (
          <li key={service.slug}>
            <IndexServiceCard service={service} />
          </li>
        ))}
      </Grid>
    </Container>
  </section>
);

export default ServicesIndex;
