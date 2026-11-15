"use client";

import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import { DEFAULT_WHATSAPP_MESSAGE, UI_TEXT, whatsappUrl } from "@/ui/content/site";

const Floating = styled(Button)`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 60;
  box-shadow: ${({ theme }) => theme.shadows.floating};
`;

// Botón flotante de WhatsApp visible en todas las páginas.
export const WhatsAppFloat = () => (
  <Floating href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)} external icon="whatsapp">
    {UI_TEXT.bookAppointment}
  </Floating>
);

export default WhatsAppFloat;
