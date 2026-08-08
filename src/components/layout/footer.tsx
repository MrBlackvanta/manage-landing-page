import { LogoIcon } from "@/components/icons";
import SubscribeForm from "@/components/subscribe-form";
import { copyright, footerLinkColumns, socialLinks } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-very-dark-blue text-center lg:text-left">
      <div className="v-container grid v-reveal gap-y-13 pt-12.75 pb-7.5 lg:grid-cols-4 lg:grid-rows-[auto_1fr] lg:gap-y-0 lg:pt-15.5 lg:pb-15.25">
        <div className="lg:col-start-4 lg:row-start-1 lg:justify-self-end">
          <SubscribeForm />
        </div>

        <nav
          aria-label="Footer"
          className="mx-auto flex w-66 justify-between text-left lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:grid lg:w-auto lg:grid-cols-2 lg:justify-normal lg:gap-x-4"
        >
          {footerLinkColumns.map((column) => (
            <ul
              key={column[0].label}
              className="flex flex-col gap-3.25 leading-5.5"
            >
              {column.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="v-footer-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <ul className="mx-auto flex w-full max-w-74 justify-between lg:col-start-1 lg:row-start-2 lg:mx-0 lg:max-w-none lg:justify-start lg:gap-3.25 lg:self-end">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="v-social-link"
              >
                <Icon className="h-8 w-auto lg:h-5" />
              </a>
            </li>
          ))}
        </ul>

        <LogoIcon className="mx-auto h-6.5 w-auto text-white lg:col-start-1 lg:row-start-1 lg:mx-0 lg:h-6" />

        <p className="text-label/4.75 tracking-link text-muted-inverse lg:col-start-4 lg:row-start-2 lg:self-end lg:justify-self-end">
          {copyright}
        </p>
      </div>

      <p className="v-container pb-0.5 text-center text-label text-muted-inverse">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-2 hover:no-underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-2 hover:no-underline"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
