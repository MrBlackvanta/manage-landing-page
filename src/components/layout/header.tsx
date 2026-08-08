import { LogoIcon } from "@/components/icons";
import { navLinks } from "@/data";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="v-container flex items-center justify-between pt-11.25 lg:pt-14">
      <a
        href="#"
        aria-label="Manage — home"
        className="inline-flex text-dark-blue"
      >
        <LogoIcon className="h-4.5 w-auto lg:h-6" />
      </a>

      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="v-nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#" className="v-btn hidden v-btn-primary lg:inline-flex">
        Get Started
      </a>

      <MobileMenu />
    </header>
  );
}
