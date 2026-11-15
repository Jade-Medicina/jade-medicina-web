"use client";

import Image from "next/image";
import styled from "styled-components";
import { AppLink } from "@/ui/atoms/AppLink";
import { Button } from "@/ui/atoms/Button";
import { ButtonRow, Container } from "@/ui/atoms/Primitives";
import { PageHeaderSection } from "@/ui/molecules/PageHeader";
import { SectionTitle } from "@/ui/molecules/SectionTitle";
import { CONTACT_PAGE, VENUE_GALLERY } from "@/ui/content/contact";
import { SITE, UI_TEXT, whatsappUrl } from "@/ui/content/site";

// ---------- Encabezado con mapa ----------

const HeaderGrid = styled(Container)`
  display: grid;
  gap: 2rem;
  align-items: center;

  ${ButtonRow} { margin: 1rem 0; }
  ${({ theme }) => theme.media.md} { grid-template-columns: 1fr 1fr; gap: 3rem; }
`;

const Phone = styled.p`
  font: 600 1.15rem ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.white};

  a { color: ${({ theme }) => theme.colors.secondary}; }
`;

const Map = styled.iframe`
  width: 100%;
  min-height: 300px;
  aspect-ratio: 16 / 10;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const ContactHeader = () => {
  const { header } = CONTACT_PAGE;
  return (
    <PageHeaderSection aria-labelledby="titulo-pagina">
      <HeaderGrid>
        <div>
          <h1 id="titulo-pagina">{header.title}</h1>
          <p>{header.address}</p>
          <Phone>
            {header.phoneLabel}{" "}
            <AppLink href={whatsappUrl()} external>
              {SITE.phone.display}
            </AppLink>
          </Phone>
          <ButtonRow>
            <Button href={header.whatsappCta.href} external variant="light" icon="whatsapp">
              {header.whatsappCta.label}
            </Button>
            <Button href={header.mapsCta.href} external variant="outlineLight">
              {header.mapsCta.label}
            </Button>
          </ButtonRow>
        </div>
        <Map src={SITE.maps.embed} title={header.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </HeaderGrid>
    </PageHeaderSection>
  );
};

// ---------- Datos de contacto ----------

const DetailsSection = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  gap: 0 2rem;

  li { padding: .75rem 0; border-bottom: 1px solid ${({ theme }) => theme.colors.line}; overflow-wrap: anywhere; }
  strong {
    display: block;
    font: 600 .82rem ${({ theme }) => theme.fonts.titles};
    text-transform: uppercase;
    letter-spacing: .06em;
    color: ${({ theme }) => theme.colors.accent};
  }

  ${({ theme }) => theme.media.sm} { grid-template-columns: repeat(2, 1fr); }
`;

export const ContactDetails = () => {
  const { details } = CONTACT_PAGE;
  return (
    <DetailsSection aria-labelledby="titulo-datos">
      <Container>
        <h2 id="titulo-datos">{details.title}</h2>
        <DetailsList>
          <li>
            <strong>{details.labels.address}</strong>
            <AppLink href={SITE.maps.url} external>
              {SITE.address.full}
            </AppLink>
          </li>
          <li>
            <strong>{details.labels.phone}</strong>
            <AppLink href={whatsappUrl()} external>
              {SITE.phone.display}
            </AppLink>
          </li>
          <li>
            <strong>{details.labels.email}</strong>
            <AppLink href={`mailto:${SITE.email}`}>{SITE.email}</AppLink>
          </li>
          <li>
            <strong>{details.labels.schedule}</strong>
            {SITE.schedule.days}, {SITE.schedule.hours}
          </li>
          <li>
            <strong>{details.labels.social}</strong>
            <AppLink href={SITE.social.instagram} external>
              {UI_TEXT.footer.instagram}
            </AppLink>{" "}
            ·{" "}
            <AppLink href={SITE.social.facebook} external>
              {UI_TEXT.footer.facebook}
            </AppLink>
          </li>
        </DetailsList>
      </Container>
    </DetailsSection>
  );
};

// ---------- Galería de la sede ----------

const Gallery = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 2rem;

  figure { margin: 0; }
  img { width: 100%; height: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: ${({ theme }) => theme.radius.card}; }
  .wide { grid-column: span 2; }
  .wide img { aspect-ratio: 16 / 9; }

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(3, 1fr);
    .wide { grid-column: span 3; }
  }
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(4, 1fr);
    .wide { grid-column: span 2; }
    .wide img { aspect-ratio: auto; }
  }
`;

export const VenueGallery = () => {
  const { venue } = CONTACT_PAGE;
  return (
    <section id={venue.id} aria-labelledby="titulo-sede">
      <Container>
        <SectionTitle id="titulo-sede" title={venue.title} text={venue.text} />
        <Gallery>
          {VENUE_GALLERY.map(({ image, wide }) => (
            <figure key={image.src} className={wide ? "wide" : undefined}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={wide ? "(min-width: 1100px) 580px, 100vw" : "(min-width: 1100px) 290px, (min-width: 640px) 33vw, 50vw"}
              />
            </figure>
          ))}
        </Gallery>
      </Container>
    </section>
  );
};
