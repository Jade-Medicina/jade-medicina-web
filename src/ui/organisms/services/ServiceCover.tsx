"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Button } from "@/ui/atoms/Button";
import { ButtonRow, Container, IconCircle, Tag } from "@/ui/atoms/Primitives";
import type { Service, ServiceCover as ServiceCoverData } from "@/models/content.model";
import { UI_TEXT } from "@/ui/content/site";

const Section = styled.section`
  && { padding: 1.75rem 0 2.5rem; }
  background: ${({ theme }) => theme.colors.cover};
  color: ${({ theme }) => theme.colors.onDark};

  h1 { color: ${({ theme }) => theme.colors.white}; font-size: clamp(1.7rem, 4.5vw, 2.3rem); font-weight: 700; }
`;

const Grid = styled(Container)`
  display: grid;
  gap: 1.75rem;
  align-items: center;

  ${({ theme }) => theme.media.md} { grid-template-columns: 1fr 1fr; gap: 3rem; }
`;

const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: .75rem 1.25rem;
  margin-bottom: 1.25rem;
`;

const Breadcrumbs = styled.p`
  font-size: .88rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.onDarkMuted};

  a { color: ${({ theme }) => theme.colors.white}; }
`;

const PartnerLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img { height: 52px; width: auto; max-width: none; flex: none; }
`;

const LogoFrame = styled.span<{ $dark?: boolean }>`
  flex: none;
  background: ${({ $dark, theme }) => ($dark ? theme.colors.titles : theme.colors.white)};
  border-radius: 12px;
  padding: .5rem .9rem;
`;

const Highlights = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  li { display: flex; align-items: center; gap: .6rem; font-weight: 600; color: ${({ theme }) => theme.colors.white}; }
`;

const SmallCircle = styled(IconCircle)`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.secondaryFaint};
  color: ${({ theme }) => theme.colors.secondary};

  svg { width: 20px; height: 20px; }
`;

const variantStyles = {
  default: css``,
  square: css`
    aspect-ratio: 1 / 1;
    max-height: 380px;
    max-width: 380px;
    justify-self: center;
  `,
  product: css`
    object-fit: contain;
    background: ${({ theme }) => theme.colors.white};
    padding: 1rem;
  `,
};

const Photo = styled(Image)<{ $variant: NonNullable<ServiceCoverData["imageVariant"]>; $position?: string }>`
  width: 100%;
  max-height: 340px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: ${({ $position }) => $position ?? "center 30%"};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.photo};

  ${({ $variant }) => variantStyles[$variant]}
`;

// Portada verde petróleo de cada servicio.
export const ServiceCover = ({ service }: { service: Service }) => {
  const { cover } = service;
  return (
    <Section>
      <Grid>
        <div>
          <TopBar>
            <Button href="/servicios" variant="outlineLight" size="small" icon="back">
              {UI_TEXT.allServices}
            </Button>
            <Breadcrumbs>
              <Link href="/servicios">{UI_TEXT.servicesBreadcrumb}</Link> › {cover.breadcrumb}
            </Breadcrumbs>
          </TopBar>
          <Tag>{cover.tag}</Tag>
          <h1 id="titulo-servicio">{service.title}</h1>
          {cover.partnerLogos && (
            <PartnerLogos>
              {cover.partnerLogos.map(({ image, dark }) => (
                <LogoFrame key={image.src} $dark={dark}>
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="170px" />
                </LogoFrame>
              ))}
            </PartnerLogos>
          )}
          {cover.lead && (
            <p>
              <strong>{cover.lead}</strong>
            </p>
          )}
          {cover.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {cover.highlights && (
            <Highlights>
              {cover.highlights.map((highlight) => (
                <li key={highlight}>
                  <SmallCircle name="check" />
                  {highlight}
                </li>
              ))}
            </Highlights>
          )}
          <ButtonRow>
            <Button href={cover.cta.href} external={cover.cta.external} variant="light" icon="whatsapp">
              {cover.cta.label}
            </Button>
          </ButtonRow>
        </div>
        <Photo
          src={cover.image.src}
          alt={cover.image.alt}
          width={cover.image.width}
          height={cover.image.height}
          sizes="(min-width: 960px) 560px, 100vw"
          $variant={cover.imageVariant ?? "default"}
          $position={cover.image.position}
          preload
        />
      </Grid>
    </Section>
  );
};

export default ServiceCover;
