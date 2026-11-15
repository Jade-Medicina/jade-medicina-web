"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Icon } from "@/ui/atoms/Icon";
import type { Service } from "@/models/content.model";
import { serviceHref } from "@/ui/content/services";
import { UI_TEXT } from "@/ui/content/site";

const CARD_SIZES = "(min-width: 1100px) 280px, (min-width: 640px) 50vw, 100vw";

const CardImage = styled(Image)<{ $position?: string }>`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: ${({ $position }) => $position ?? "center 25%"};
`;

// ---------- Tarjeta de Inicio (con ícono redondo) ----------

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  box-shadow: ${({ theme }) => theme.shadows.base};
  overflow: hidden;
  padding-bottom: 1.25rem;

  &:hover { box-shadow: ${({ theme }) => theme.shadows.hover}; color: ${({ theme }) => theme.colors.text}; }

  h3 { font-size: 1rem; font-weight: 700; padding: 0 1rem; margin-bottom: .35rem; }
  p { font-size: .9rem; padding: 0 1rem; margin-bottom: .75rem; flex: 1; }
`;

const RoundIcon = styled.span`
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  margin: -29px 0 .6rem;
  position: relative;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};

  svg { width: 26px; height: 26px; }
`;

const MoreLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  color: ${({ theme }) => theme.colors.accent};
  font: 700 .9rem ${({ theme }) => theme.fonts.titles};

  svg { width: 16px; height: 16px; }
`;

export const HomeServiceCard = ({ service }: { service: Service }) => {
  const { card } = service;
  return (
    <HomeLink href={serviceHref(service.slug)}>
      <CardImage
        src={card.image.src}
        alt={card.image.alt}
        width={card.image.width}
        height={card.image.height}
        sizes={CARD_SIZES}
        $position={card.image.position}
      />
      <RoundIcon>
        <Icon name={card.icon} />
      </RoundIcon>
      <h3>{card.homeTitle}</h3>
      <p>{card.homeText}</p>
      <MoreLink>
        {UI_TEXT.learnMore} <Icon name="arrow" />
      </MoreLink>
    </HomeLink>
  );
};

// ---------- Tarjeta del índice de Servicios ----------

const IndexLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};
  overflow: hidden;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.titles};
  font: 600 1.05rem/1.3 ${({ theme }) => theme.fonts.titles};

  &:hover { box-shadow: ${({ theme }) => theme.shadows.hover}; }
`;

const IndexText = styled.span`
  display: flex;
  flex-direction: column;
  gap: .3rem;
  padding: 1.1rem 1.3rem 1.3rem;
  flex: 1;

  small { display: block; font: 400 .9rem ${({ theme }) => theme.fonts.text}; color: ${({ theme }) => theme.colors.text}; }
`;

const IndexMore = styled.span`
  margin-top: auto;
  padding-top: .5rem;
  font: 600 .9rem ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.accent};
`;

export const IndexServiceCard = ({ service }: { service: Service }) => {
  const { card } = service;
  return (
    <IndexLink href={serviceHref(service.slug)}>
      <CardImage
        src={card.image.src}
        alt={card.image.alt}
        width={card.image.width}
        height={card.image.height}
        sizes={CARD_SIZES}
        $position={card.image.position}
      />
      <IndexText>
        {service.cover.breadcrumb}
        <small>{card.indexDetail}</small>
        <IndexMore>{UI_TEXT.seeService} →</IndexMore>
      </IndexText>
    </IndexLink>
  );
};
