"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { Button } from "@/ui/atoms/Button";
import { Icon } from "@/ui/atoms/Icon";
import { Container } from "@/ui/atoms/Primitives";
import { useMobileMenu } from "@/ui/hooks/useMobileMenu";
import { DEFAULT_WHATSAPP_MESSAGE, LOGOS, NAV_LINKS, UI_TEXT, whatsappUrl } from "@/ui/content/site";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.line};
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 72px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`;

const Logo = styled(Link)`
  img { width: 120px; height: auto; }
  ${({ theme }) => theme.media.md} { img { width: 150px; } }
`;

const RoundButton = styled.button`
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  flex: none;
`;

const MenuButton = styled(RoundButton)`
  width: 46px;
  height: 46px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.titles};

  svg { width: 24px; height: 24px; }
  ${({ theme }) => theme.media.lg} { display: none; }
`;

const TopNav = styled.nav`
  display: none;
  ${({ theme }) => theme.media.lg} { display: block; }

  ul { list-style: none; display: flex; gap: 1.5rem; margin: 0; padding: 0; }
  a {
    color: ${({ theme }) => theme.colors.titles};
    font: 600 .95rem ${({ theme }) => theme.fonts.titles};
    text-decoration: none;
    padding: .5rem 0;
    border-bottom: 2px solid transparent;
  }
  a:hover,
  a[aria-current="page"] {
    color: ${({ theme }) => theme.colors.accent};
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 90;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity .25s;

  ${({ theme }) => theme.media.reducedMotion} { transition: none; }
`;

const Drawer = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: min(320px, 85vw);
  background: ${({ theme }) => theme.colors.titles};
  color: ${({ theme }) => theme.colors.white};
  z-index: 100;
  padding: 1.25rem 1.5rem 2rem;
  transform: ${({ $open }) => ($open ? "none" : "translateX(-100%)")};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  /* Al abrir, visibility cambia al instante para poder enfocar el botón de cerrar;
     al cerrar, espera a que termine el deslizamiento. */
  transition: ${({ $open }) => ($open ? "transform .25s ease" : "transform .25s ease, visibility 0s linear .25s")};
  overflow-y: auto;

  ${({ theme }) => theme.media.reducedMotion} { transition: none; }

  ul { list-style: none; margin: 0; padding: 0; }
  a:not([data-cta]) {
    display: block;
    padding: .85rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.onDarkLine};
    color: ${({ theme }) => theme.colors.white};
    font: 600 1.05rem ${({ theme }) => theme.fonts.titles};
    text-decoration: none;
  }
  a:not([data-cta]):hover,
  a[aria-current="page"] { color: ${({ theme }) => theme.colors.secondary}; }
  a[data-cta] { display: flex; margin-top: 1.5rem; }
`;

const CloseButton = styled(RoundButton)`
  width: 42px;
  height: 42px;
  background: ${({ theme }) => theme.colors.onDarkLine};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;

  svg { width: 22px; height: 22px; }
`;

const isCurrent = (href: string, pathname: string) => {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export const Header = () => {
  const pathname = usePathname();
  const { isOpen, open, close, openButtonRef, closeButtonRef } = useMobileMenu();
  const bookingUrl = whatsappUrl(DEFAULT_WHATSAPP_MESSAGE);

  const links = NAV_LINKS.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        aria-current={isCurrent(link.href, pathname) ? "page" : undefined}
        onClick={isOpen ? () => close(false) : undefined}
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <>
      <Bar>
        <Inner>
          <Left>
            <MenuButton
              ref={openButtonRef}
              type="button"
              aria-expanded={isOpen}
              aria-controls="menu"
              aria-label={UI_TEXT.openMenu}
              onClick={open}
            >
              <Icon name="menu" />
            </MenuButton>
            <Logo href="/">
              <Image
                src={LOGOS.color.src}
                alt={UI_TEXT.logoAlt}
                width={LOGOS.color.width}
                height={LOGOS.color.height}
                sizes="150px"
                loading="eager"
              />
            </Logo>
          </Left>
          <TopNav aria-label={UI_TEXT.mainNav}>
            <ul>{links}</ul>
          </TopNav>
          <Button href={bookingUrl} external size="header" icon="whatsapp">
            {UI_TEXT.headerWhatsapp}
          </Button>
        </Inner>
      </Bar>
      <Overlay $open={isOpen} onClick={() => close()} aria-hidden="true" />
      <Drawer id="menu" aria-label={UI_TEXT.mobileNav} $open={isOpen}>
        <CloseButton ref={closeButtonRef} type="button" aria-label={UI_TEXT.closeMenu} onClick={() => close()}>
          <Icon name="close" />
        </CloseButton>
        <ul>
          {links}
          <li>
            <Button href={bookingUrl} external variant="light" icon="whatsapp" data-cta="">
              {UI_TEXT.bookAppointment}
            </Button>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Header;
