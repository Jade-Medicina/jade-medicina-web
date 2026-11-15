"use client";

import styled from "styled-components";

// Ruta de atención: paradas numeradas unidas por líneas punteadas y flechas
// (vertical en celular, horizontal desde 960 px).
const Route = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  counter-reset: paso;
  display: grid;
  gap: 2rem;

  li { counter-increment: paso; position: relative; padding-left: 4.25rem; min-height: 3.25rem; }
  li::before {
    content: counter(paso);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    font: 800 1.2rem ${({ theme }) => theme.fonts.titles};
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.secondarySoft};
  }
  li:not(:last-child)::after {
    content: "";
    position: absolute;
    left: calc(1.625rem - 1.5px);
    top: 4rem;
    bottom: -1.6rem;
    border-left: 3px dashed ${({ theme }) => theme.colors.secondary};
  }
  li:not(:last-child) strong::before {
    content: "";
    position: absolute;
    left: calc(1.625rem - 7px);
    bottom: -2.1rem;
    border: 7px solid transparent;
    border-top: 9px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 0;
  }
  strong { display: block; color: ${({ theme }) => theme.colors.titles}; font: 700 1.02rem ${({ theme }) => theme.fonts.titles}; margin: .3rem 0; }
  p { margin: 0; font-size: .93rem; }

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25rem;

    li { padding: 4.75rem 0 0; text-align: center; }
    li::before { left: 50%; transform: translateX(-50%); width: 3.5rem; height: 3.5rem; }
    li:not(:last-child)::after {
      left: calc(50% + 2.4rem);
      right: calc(-50% + 2.4rem - 1.25rem + 12px);
      top: 1.75rem;
      bottom: auto;
      border-left: 0;
      border-top: 3px dashed ${({ theme }) => theme.colors.secondary};
    }
    li:not(:last-child) strong::before {
      left: auto;
      right: calc(-50% + 2.4rem - 1.25rem);
      top: calc(1.75rem - 6px);
      bottom: auto;
      border: 7px solid transparent;
      border-left: 10px solid ${({ theme }) => theme.colors.primary};
      border-right: 0;
    }
  }
`;

export const CareRoute = ({ steps }: { steps: { title: string; text: string }[] }) => (
  <Route>
    {steps.map((step) => (
      <li key={step.title}>
        <strong>{step.title}</strong>
        <p>{step.text}</p>
      </li>
    ))}
  </Route>
);

export default CareRoute;
