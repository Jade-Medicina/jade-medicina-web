"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import type { TeamCard } from "@/models/content.model";

const Card = styled.li`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Photo = styled(Image)`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center 15%;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

const Data = styled.div`
  padding: 1.25rem 1.4rem 1.5rem;
  flex: 1;

  h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: .35rem; }
`;

const Member = styled.div`
  & + & { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid ${({ theme }) => theme.colors.line}; }
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin: 0 0 .25rem;
`;

const Institution = styled.p`
  font-size: .9rem;
  margin: 0 0 .75rem;
`;

// Tarjeta de la página Equipo: foto, formación de cada profesional y enlace a su servicio.
export const ProfessionalCard = ({ card }: { card: TeamCard }) => (
  <Card>
    <Photo
      src={card.image.src}
      alt={card.image.alt}
      width={card.image.width}
      height={card.image.height}
      sizes="(min-width: 1100px) 280px, (min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
    />
    <Data>
      {card.members.map((member) => (
        <Member key={member.name}>
          <h3>{member.name}</h3>
          {member.credentials.map((credential) => (
            <div key={credential.title}>
              <Role>{credential.title}</Role>
              <Institution>{credential.institution}</Institution>
            </div>
          ))}
          {member.note && <Institution>{member.note}</Institution>}
        </Member>
      ))}
      <Button href={card.serviceLink.href} variant="outline" size="small">
        {card.serviceLink.label}
      </Button>
    </Data>
  </Card>
);

export default ProfessionalCard;
