"use client";

import styled from "styled-components";
import { Container } from "@/ui/atoms/Primitives";
import { HomeServiceCard } from "@/ui/molecules/ServiceCards";
import { HOME } from "@/ui/content/home";
import { HOME_SERVICE_ORDER, getServicesInOrder } from "@/ui/content/services";

const Title = styled.div`
  margin-bottom: 1.75rem;

  h2 { margin: 0 0 .35rem; }
  h2::before {
    content: "";
    display: inline-block;
    width: 2rem;
    height: 4px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    margin-right: .75rem;
    vertical-align: middle;
  }
  h2 span { color: ${({ theme }) => theme.colors.accent}; }
  p { margin: 0; }
`;

const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));

  ${({ theme }) => theme.media.lg} { grid-template-columns: repeat(4, 1fr); }
`;

const services = getServicesInOrder(HOME_SERVICE_ORDER);

export const HomeServices = () => (
  <section aria-labelledby="titulo-servicios">
    <Container>
      <Title>
        <h2 id="titulo-servicios">
          {HOME.services.titleStart} <span>{HOME.services.titleHighlight}</span>
        </h2>
        <p>{HOME.services.subtitle}</p>
      </Title>
      <Grid>
        {services.map((service) => (
          <li key={service.slug}>
            <HomeServiceCard service={service} />
          </li>
        ))}
      </Grid>
    </Container>
  </section>
);

export default HomeServices;
