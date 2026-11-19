"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  ["/", "Início"],
  ["/o-escritorio", "O Escritório"],
  ["/advogada", "Nossa Equipe"],
  ["/areas-de-atuacao", "Áreas de Atuação"],
  ["/contato", "Contato"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Fechar" : "Menu"}</span>
        <span className="mobile-nav__icon" aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav__panel" aria-label="Navegação móvel">
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
