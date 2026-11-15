"use client";

import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import type { BookingOption, CallToAction } from "@/models/content.model";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius.base};
  box-shadow: ${({ theme }) => theme.shadows.base};
  padding: 1.5rem;
`;

const Option = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radius.soft};
  padding: 1rem 1.1rem;
  margin-bottom: .9rem;

  h4 { margin: 0 0 .3rem; color: ${({ theme }) => theme.colors.titles}; font: 600 1rem ${({ theme }) => theme.fonts.titles}; }
  p { margin: 0; font-size: .93rem; }
`;

interface BookingBoxProps {
  title: string;
  text?: string;
  options?: BookingOption[];
  cta: CallToAction;
}

// Caja "¿Cómo puedo agendar?" con las opciones de convenio y particular.
export const BookingBox = ({ title, text, options = [], cta }: BookingBoxProps) => (
  <Card>
    <h3>{title}</h3>
    {text && <p>{text}</p>}
    {options.map((option) => (
      <Option key={option.title}>
        <h4>{option.title}</h4>
        <p>{option.text}</p>
      </Option>
    ))}
    <Button href={cta.href} external={cta.external} icon="whatsapp">
      {cta.label}
    </Button>
  </Card>
);

export default BookingBox;
