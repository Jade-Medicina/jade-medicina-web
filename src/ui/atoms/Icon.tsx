import type { ReactNode } from "react";
import type { IconName } from "@/models/content.model";

// Íconos de línea del diseño (fase 1). Son decorativos: el texto que los acompaña da el significado.
const ICONS: Record<IconName, { strokeWidth: number; paths: ReactNode }> = {
  whatsapp: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
        <path d="M9 8.5c0 3.5 2.5 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.8-2.8l.8-1-1-2z" />
      </>
    ),
  },
  menu: { strokeWidth: 2, paths: <path d="M4 7h16M4 12h16M4 17h16" /> },
  close: { strokeWidth: 2, paths: <path d="M6 6l12 12M18 6L6 18" /> },
  calendar: {
    strokeWidth: 1.8,
    paths: (
      <>
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M8 3v4M16 3v4M3.5 10h17M12 13v4M10 15h4" />
      </>
    ),
  },
  stethoscope: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M6 3H5a1 1 0 0 0-1 1v5a5 5 0 0 0 10 0V4a1 1 0 0 0-1-1h-1" />
        <path d="M9 14v1.5a5.5 5.5 0 0 0 11 0V13" />
        <circle cx="20" cy="11" r="2" />
      </>
    ),
  },
  shield: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  location: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  handshake: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </>
    ),
  },
  arrow: { strokeWidth: 2, paths: <path d="M5 12h14M13 6l6 6-6 6" /> },
  people: {
    strokeWidth: 1.8,
    paths: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15.5 14.5c3 0 5.5 2 5.5 5" />
      </>
    ),
  },
  heart: { strokeWidth: 1.8, paths: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /> },
  physio: {
    strokeWidth: 1.8,
    paths: (
      <>
        <circle cx="12" cy="4.5" r="2" />
        <path d="M5 9l7 2 7-2M12 11v5l-3 5M12 16l3 5" />
      </>
    ),
  },
  bone: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M9.5 6.5L17.5 14.5" />
        <path d="M6.5 3.5a2 2 0 0 0-3 3 2 2 0 0 0 3 3l3-3a2 2 0 0 0 0-3" />
        <path d="M17.5 20.5a2 2 0 0 0 3-3 2 2 0 0 0-3-3l-3 3a2 2 0 0 0 0 3" />
      </>
    ),
  },
  child: {
    strokeWidth: 1.8,
    paths: (
      <>
        <circle cx="12" cy="13" r="7" />
        <path d="M9.5 15c1.3 1.3 3.7 1.3 5 0M9.5 12h.01M14.5 12h.01M12 6c0-2 2-3 3-2" />
      </>
    ),
  },
  foot: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M9 21c-2.2 0-3.5-1.8-3.5-4 0-2.5 1-4.5 1-7.5A3.5 3.5 0 0 1 13.5 9c0 2-1 3.2-1 5 0 1.5 1 2.5 1 3.8C13.5 19.8 11.5 21 9 21z" />
        <circle cx="16" cy="5" r="1.2" />
        <circle cx="18.5" cy="7.5" r="1" />
        <circle cx="13" cy="3.5" r="1.2" />
      </>
    ),
  },
  ear: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M6 8.5a6 6 0 0 1 12 0c0 3-2 4-3.5 5.5S13 17 13 18.5A2.5 2.5 0 0 1 8 18.5" />
        <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-2 3" />
      </>
    ),
  },
  pulse: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        <path d="M7 11h3l1-2 2 4 1-2h3" />
      </>
    ),
  },
  insole: {
    strokeWidth: 1.8,
    paths: (
      <>
        <path d="M10 3c3.2 0 5 3 5 7 0 3-1 4.2-1 7 0 2.2-1.6 4-4 4s-4-2-4-5c0-2 1-3.2 1-6S6.8 3 10 3z" />
        <path d="M8.5 15.5h4" />
      </>
    ),
  },
  check: { strokeWidth: 2.2, paths: <path d="M6 12l4 4 8-8" /> },
  back: { strokeWidth: 2, paths: <path d="M15 6l-6 6 6 6" /> },
};

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  const { strokeWidth, paths } = ICONS[name];
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths}
    </svg>
  );
};

export default Icon;
