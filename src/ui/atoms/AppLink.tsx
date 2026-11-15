import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

export interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** Enlace externo (WhatsApp, Google Maps, redes): abre en una pestaña nueva. */
  external?: boolean;
}

// next/link para rutas internas; <a> para enlaces externos, mailto y tel.
export const AppLink = ({ href, external, children, ...props }: AppLinkProps) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default AppLink;
