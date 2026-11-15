"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import { CheckList, Tag } from "@/ui/atoms/Primitives";
import type { CallToAction, ImageAsset, ServicePerson } from "@/models/content.model";

const Box = styled.div`
  display: grid;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};
  padding: 1.5rem;
  align-items: center;

  h3 { font-size: 1.35rem; margin-bottom: .75rem; }
  ${Tag} { margin-bottom: .6rem; }

  ${({ theme }) => theme.media.sm} { grid-template-columns: 220px 1fr; }
  ${({ theme }) => theme.media.md} { grid-template-columns: 200px 1fr; padding: 1.75rem; gap: 2rem; }
`;

const Photo = styled(Image)`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center 15%;
  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

interface AttendingTeamProps {
  tag: string;
  image: ImageAsset;
  people: ServicePerson[];
  bio?: string;
  cta: CallToAction;
}

// Bloque "Te atenderá" de cada servicio: foto, profesionales, formación y botón de agendar.
export const AttendingTeam = ({ tag, image, people, bio, cta }: AttendingTeamProps) => (
  <Box>
    <Photo src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="220px" />
    <div>
      <Tag>{tag}</Tag>
      {people.map((person) => (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <CheckList>
            {person.credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </CheckList>
        </div>
      ))}
      {bio && <p>{bio}</p>}
      <Button href={cta.href} external={cta.external} icon="whatsapp">
        {cta.label}
      </Button>
    </div>
  </Box>
);

export default AttendingTeam;
