"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Estado del menú lateral (móvil): bloquea el scroll del body, mueve el foco
 * al abrir/cerrar y cierra con Escape. Equivale a js/sitio.js del diseño.
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(() => setIsOpen(true), []);

  const close = useCallback((returnFocus = true) => {
    setIsOpen(false);
    if (returnFocus) openButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    if (!isOpen) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen, close]);

  return { isOpen, open, close, openButtonRef, closeButtonRef };
}
