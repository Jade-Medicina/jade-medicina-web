"use client";

import Image from "next/image";
import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import { Container } from "@/ui/atoms/Primitives";
import { AttendingTeam } from "@/ui/molecules/AttendingTeam";
import { BookingBox } from "@/ui/molecules/BookingBox";
import { CareRoute } from "@/ui/molecules/CareRoute";
import { ConditionsGrid } from "@/ui/molecules/ConditionsGrid";
import { RelatedServices } from "@/ui/molecules/RelatedServices";
import { RichCheckList } from "@/ui/molecules/RichCheckList";
import { SectionTitle } from "@/ui/molecules/SectionTitle";
import type { ServiceBlock, ServiceColumn } from "@/models/content.model";
import { UI_TEXT } from "@/ui/content/site";

// Los bloques alternan fondo blanco y verde claro, como en el diseño.
const Block = styled.section<{ $alt: boolean }>`
  && { padding: 2.25rem 0; }
  background: ${({ $alt, theme }) => ($alt ? theme.colors.backgroundAlt : "transparent")};
`;

const TwoColumns = styled(Container)`
  display: grid;
  gap: 2rem;
  align-items: start;

  ${({ theme }) => theme.media.md} { grid-template-columns: 1fr 1fr; gap: 3rem; }
`;

const Samples = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .75rem;
  margin-top: 1.25rem;
  max-width: 460px;

  img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radius.soft};
    border: 1px solid ${({ theme }) => theme.colors.line};
    background: ${({ theme }) => theme.colors.white};
  }
`;

const BackButton = () => (
  <Button href="/servicios" variant="outline" icon="back">
    {UI_TEXT.allServices}
  </Button>
);

const Column = ({ column }: { column: ServiceColumn }) => {
  switch (column.kind) {
    case "checklist":
      return (
        <div>
          <SectionTitle compact title={column.title} />
          <RichCheckList items={column.items} />
        </div>
      );
    case "conditions":
      return (
        <div>
          <SectionTitle compact title={column.title} />
          <ConditionsGrid items={column.items} />
        </div>
      );
    case "booking":
      return <BookingBox title={column.title} text={column.text} options={column.options} cta={column.cta} />;
    case "related":
      return (
        <div>
          <SectionTitle compact title={column.title} />
          <RelatedServices items={column.items} column />
          <BackButton />
        </div>
      );
    case "text":
      return (
        <div>
          <SectionTitle compact title={column.title} />
          {column.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {column.samples && (
            <Samples>
              {column.samples.map((sample) => (
                <Image
                  key={sample.src}
                  src={sample.src}
                  alt={sample.alt}
                  width={sample.width}
                  height={sample.height}
                  sizes="230px"
                />
              ))}
            </Samples>
          )}
        </div>
      );
  }
};

const BlockContent = ({ block }: { block: ServiceBlock }) => {
  switch (block.kind) {
    case "team":
      return (
        <Container>
          <SectionTitle compact title={block.title} />
          <AttendingTeam tag={block.tag} image={block.image} people={block.people} bio={block.bio} cta={block.cta} />
        </Container>
      );
    case "conditions":
      return (
        <Container>
          <SectionTitle compact title={block.title} />
          <ConditionsGrid items={block.items} />
        </Container>
      );
    case "route":
      return (
        <Container>
          <SectionTitle compact title={block.title} />
          <CareRoute steps={block.steps} />
        </Container>
      );
    case "columns":
      return (
        <TwoColumns>
          <Column column={block.columns[0]} />
          <Column column={block.columns[1]} />
        </TwoColumns>
      );
    case "related":
      return (
        <Container>
          <SectionTitle compact title={block.title} />
          <RelatedServices items={block.items} />
          <BackButton />
        </Container>
      );
    case "back":
      return (
        <Container>
          <BackButton />
        </Container>
      );
  }
};

export const ServiceBlocks = ({ blocks }: { blocks: ServiceBlock[] }) => (
  <>
    {blocks.map((block, index) => (
      <Block key={`${block.kind}-${index}`} $alt={index % 2 === 0}>
        <BlockContent block={block} />
      </Block>
    ))}
  </>
);

export default ServiceBlocks;
