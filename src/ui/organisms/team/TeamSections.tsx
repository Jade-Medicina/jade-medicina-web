"use client";

import Image from "next/image";
import styled from "styled-components";
import { Container } from "@/ui/atoms/Primitives";
import { ProfessionalCard } from "@/ui/molecules/ProfessionalCard";
import { SectionTitle } from "@/ui/molecules/SectionTitle";
import { TEAM, TEAM_PAGE } from "@/ui/content/team";

const GroupPhoto = styled(Image)`
  width: 100%;
  max-height: 400px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center 35%;
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};

  ${({ theme }) => theme.media.md} { aspect-ratio: 21 / 9; }
`;

export const TeamGroupPhoto = () => (
  <section aria-label={TEAM_PAGE.groupPhotoLabel}>
    <Container>
      <GroupPhoto
        src={TEAM_PAGE.groupPhoto.src}
        alt={TEAM_PAGE.groupPhoto.alt}
        width={TEAM_PAGE.groupPhoto.width}
        height={TEAM_PAGE.groupPhoto.height}
        sizes="(min-width: 1180px) 1150px, 100vw"
        preload
      />
    </Container>
  </section>
);

const ListSection = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 6px solid ${({ theme }) => theme.colors.secondary};
`;

const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.5rem;

  ${({ theme }) => theme.media.sm} { grid-template-columns: repeat(2, 1fr); }
  ${({ theme }) => theme.media.md} { grid-template-columns: repeat(3, 1fr); }
  ${({ theme }) => theme.media.lg} { grid-template-columns: repeat(4, 1fr); }
`;

export const TeamList = () => (
  <ListSection aria-labelledby="titulo-profesionales">
    <Container>
      <SectionTitle id="titulo-profesionales" title={TEAM_PAGE.listTitle} />
      <Grid>
        {TEAM.map((card) => (
          <ProfessionalCard key={card.serviceLink.href} card={card} />
        ))}
      </Grid>
    </Container>
  </ListSection>
);
