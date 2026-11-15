"use client";

import type { ReactNode } from "react";
import { SkipLink } from "@/ui/atoms/Primitives";
import { Header } from "@/ui/organisms/header/Header";
import { Footer } from "@/ui/organisms/footer/Footer";
import { WhatsAppFloat } from "@/ui/organisms/floating/WhatsAppFloat";
import { UI_TEXT } from "@/ui/content/site";

// Marco común de las páginas públicas: cabecera, contenido, pie y botón flotante.
export const PublicLayout = ({ children }: { children: ReactNode }) => (
  <>
    <SkipLink href="#contenido">{UI_TEXT.skipLink}</SkipLink>
    <Header />
    <main id="contenido">{children}</main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default PublicLayout;
