"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import { Container } from "@/ui/atoms/Primitives";
import { HeroCurves } from "./HeroCurves";
import { HOME } from "@/ui/content/home";

// Portada por capas: curvas SVG abajo, logo de la pared y equipo con bata.
const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 2rem 0 0;
  background: linear-gradient(
    115deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.background} 45%,
    ${({ theme }) => theme.colors.backgroundAlt} 100%
  );

  ${({ theme }) => theme.media.md} { padding-top: 2.5rem; }
`;

const Curves = styled(HeroCurves)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30%;
  min-height: 140px;
  pointer-events: none;

  ${({ theme }) => theme.media.md} { height: 50%; }
`;

const Grid = styled(Container)`
  position: relative;
  display: grid;
  gap: 1.5rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 1.45fr;
    gap: 1rem;
    align-items: center;
  }
`;

const Text = styled.div`
  h1 {
    font-size: clamp(2rem, 5.5vw, 3.1rem);
    font-weight: 600;
    letter-spacing: -.01em;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.titles};
    max-width: 15ch;
  }
  p { font-size: 1.05rem; font-weight: 300; max-width: 46ch; margin-bottom: 1.5rem; }
  p strong { font-weight: 600; }

  ${({ theme }) => theme.media.md} {
    padding-bottom: 8rem;
    h1 { max-width: none; font-size: clamp(2.1rem, 3vw, 2.75rem); }
    p { font-size: 1rem; }
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;

  ${({ theme }) => theme.media.md} { display: block; }
`;

const StrongHighlight = styled.strong`
  color: ${({ theme }) => theme.colors.accent};
`;

const Scene = styled.div`
  position: relative;
  align-self: end;
  padding-top: 12%;

  ${({ theme }) => theme.media.md} { margin-right: -1rem; }
`;

const WallLogo = styled(Image)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 58%;
  height: auto;
  transform: translateX(-50%);
`;

const Team = styled(Image)`
  position: relative;
  width: 100%;
  height: auto;
`;

export const HomeHero = () => {
  const { hero } = HOME;
  return (
    <Section aria-labelledby="titulo-portada">
      <Curves />
      <Grid>
        <Text>
          <h1 id="titulo-portada">
            {hero.titleStart} <Highlight>{hero.titleHighlight}</Highlight>
          </h1>
          <p>
            {hero.text} <StrongHighlight>{hero.textHighlight}</StrongHighlight>
          </p>
          <Button href={hero.cta.href} external={hero.cta.external} size="large" icon="calendar" iconEnd="arrow">
            {hero.cta.label}
          </Button>
        </Text>
        <Scene>
          <WallLogo
            src={hero.wallLogo.src}
            alt={hero.wallLogo.alt}
            width={hero.wallLogo.width}
            height={hero.wallLogo.height}
            sizes="(min-width: 960px) 400px, 58vw"
            loading="eager"
          />
          <Team
            src={hero.team.src}
            alt={hero.team.alt}
            width={hero.team.width}
            height={hero.team.height}
            sizes="(min-width: 1180px) 700px, (min-width: 960px) 60vw, 100vw"
            preload
          />
        </Scene>
      </Grid>
    </Section>
  );
};

export default HomeHero;
