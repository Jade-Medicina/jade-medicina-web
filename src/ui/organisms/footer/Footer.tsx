"use client";

import Image from "next/image";
import styled from "styled-components";
import { AppLink } from "@/ui/atoms/AppLink";
import { Container, PlainList } from "@/ui/atoms/Primitives";
import { LOGOS, NAV_LINKS, SITE, UI_TEXT, whatsappUrl } from "@/ui/content/site";

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.titles};
  color: ${({ theme }) => theme.colors.onDark};
  padding: 3rem 0 6rem;
  font-size: .95rem;

  a { color: ${({ theme }) => theme.colors.white}; }
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .85rem;
    text-transform: uppercase;
    letter-spacing: .12em;
    margin-bottom: .75rem;
  }
  li { margin-bottom: .4rem; overflow-wrap: anywhere; }

  ${({ theme }) => theme.media.md} { padding-bottom: 3rem; }
`;

const Columns = styled.div`
  display: grid;
  gap: 2rem;
  ${({ theme }) => theme.media.md} { grid-template-columns: 1.4fr 1fr 1fr; }
`;

const FooterLogo = styled(Image)`
  width: 170px;
  height: auto;
  margin-bottom: 1rem;
`;

const Legal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.footerLine};
  margin-top: 2rem;
  padding-top: 1.25rem;
  font-size: .85rem;
`;

// En el pie se omite "Inicio" del menú, como en el diseño.
const FOOTER_LINKS = NAV_LINKS.filter((link) => link.href !== "/");

export const Footer = () => (
  <Wrapper>
    <Container>
      <Columns>
        <div>
          <FooterLogo
            src={LOGOS.colorOnDark.src}
            alt={LOGOS.colorOnDark.alt}
            width={LOGOS.colorOnDark.width}
            height={LOGOS.colorOnDark.height}
            sizes="170px"
          />
          <p>{SITE.slogan}</p>
        </div>
        <div>
          <h2>{UI_TEXT.footer.contactTitle}</h2>
          <PlainList>
            <li>
              <AppLink href={SITE.maps.url} external>
                {SITE.address.full}
              </AppLink>
            </li>
            <li>
              <AppLink href={whatsappUrl()} external>
                {UI_TEXT.footer.whatsappPrefix} {SITE.phone.display}
              </AppLink>
            </li>
            <li>
              <AppLink href={`mailto:${SITE.email}`}>{SITE.email}</AppLink>
            </li>
            <li>
              {SITE.schedule.days}: {SITE.schedule.hours}
            </li>
          </PlainList>
        </div>
        <div>
          <h2>{UI_TEXT.footer.siteTitle}</h2>
          <PlainList>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <AppLink href={link.href}>{link.label}</AppLink>
              </li>
            ))}
            <li>
              <AppLink href={SITE.social.instagram} external>
                {UI_TEXT.footer.instagram}
              </AppLink>{" "}
              ·{" "}
              <AppLink href={SITE.social.facebook} external>
                {UI_TEXT.footer.facebook}
              </AppLink>
            </li>
          </PlainList>
        </div>
      </Columns>
      <Legal>
        <p>
          © {SITE.copyrightYear} {SITE.legalName} · NIT {SITE.nit}
        </p>
      </Legal>
    </Container>
  </Wrapper>
);

export default Footer;
