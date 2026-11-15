"use client";

import Image from "next/image";
import styled from "styled-components";
import { AppLink } from "@/ui/atoms/AppLink";
import { Button } from "@/ui/atoms/Button";
import { Container } from "@/ui/atoms/Primitives";
import { Icon } from "@/ui/atoms/Icon";
import { HOME } from "@/ui/content/home";

const Section = styled.section`
  && { padding-top: 0; }
`;

const Grid = styled(Container)`
  display: grid;
  gap: 1.5rem;
  align-items: center;

  ${({ theme }) => theme.media.md} { grid-template-columns: 1.1fr 1.3fr 1fr; gap: 2rem; }
`;

const Venue = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.75rem;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
  border-radius: 24px 110px 24px 24px;

  > svg { width: 44px; height: 44px; flex: none; }
  h2 { color: ${({ theme }) => theme.colors.white}; font-size: 1.05rem; margin: 0 0 .2rem; }
  p { margin: 0 0 .25rem; }
  a { margin-top: .9rem; }
  a svg { width: 18px; height: 18px; }
`;

const Address = styled.p`
  font: 800 1.35rem ${({ theme }) => theme.fonts.titles};
`;

const Agreements = styled.div`
  h2 { font-size: 1.2rem; margin-bottom: .4rem; }
  p { font-size: .9rem; margin-bottom: .9rem; }

  ${({ theme }) => theme.media.md} {
    border-left: 1px solid ${({ theme }) => theme.colors.line};
    border-right: 1px solid ${({ theme }) => theme.colors.line};
    padding: 0 2rem;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: .9rem;

  img { height: 42px; width: auto; }
`;

const Note = styled.p`
  && { font-size: .85rem; }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: .9rem;

  h2 { font-size: 1.2rem; margin-bottom: .4rem; }
`;

const Coverage = styled(AppLink)`
  font-size: .9rem;
  font-weight: 600;
`;

// Cierre de Inicio: sede, convenios y contacto.
export const HomeClosing = () => {
  const { venue, agreements, contact, label } = HOME.closing;
  return (
    <Section aria-label={label}>
      <Grid>
        <Venue>
          <Icon name="location" />
          <div>
            <h2>{venue.title}</h2>
            <Address>{venue.address}</Address>
            <p>{venue.area}</p>
            <Button href={venue.cta.href} external={venue.cta.external} variant="outlineLight" iconEnd="arrow">
              {venue.cta.label}
            </Button>
          </div>
        </Venue>
        <Agreements id={agreements.id}>
          <h2>{agreements.title}</h2>
          <p>{agreements.text}</p>
          <Logos>
            {agreements.logos.map((logo) => (
              <Image key={logo.src} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="160px" />
            ))}
          </Logos>
          <Note>{agreements.note}</Note>
        </Agreements>
        <Contact>
          <h2>{contact.title}</h2>
          <Button href={contact.cta.href} external={contact.cta.external} size="large" icon="whatsapp">
            {contact.cta.label}
          </Button>
          <Coverage href={contact.coverage.href} external={contact.coverage.external}>
            {contact.coverage.label}
          </Coverage>
        </Contact>
      </Grid>
    </Section>
  );
};

export default HomeClosing;
