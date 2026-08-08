"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { MenuToggleIcon } from "@/components/icons";
import { navLinks } from "@/data";

export default function MobileMenu() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  const close = useCallback(() => {
    if (panelRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus();
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="flex lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="v-menu-toggle"
      >
        <MenuToggleIcon className="h-4.5 w-6.25" />
      </button>

      <div
        data-open={open || undefined}
        onClick={close}
        className="v-menu-overlay"
      >
        <nav
          ref={panelRef}
          id={panelId}
          aria-label="Mobile"
          className="v-container pt-25.75"
          onClick={(event) => event.stopPropagation()}
        >
          <ul className="v-menu-panel">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={close}
                  className="text-title font-bold tracking-tight text-dark-blue"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
