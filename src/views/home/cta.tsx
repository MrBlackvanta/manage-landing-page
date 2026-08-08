import { cta } from "@/data";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="flex min-h-101.25 items-center bg-bright-red bg-[url('/bg-simplify-section-mobile.svg')] bg-cover bg-center bg-no-repeat lg:min-h-55 lg:bg-[url('/bg-simplify-section-desktop.svg')]"
    >
      <div className="v-container flex v-reveal flex-col items-center gap-7.25 text-center lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
        <h2
          id="cta-title"
          className="max-w-lg text-display-sm font-bold tracking-display-sm text-white lg:max-w-111.25 lg:text-heading lg:tracking-tight"
        >
          {cta.title}
        </h2>
        <a href={cta.cta.href} className="v-btn shrink-0 v-btn-inverse">
          {cta.cta.label}
        </a>
      </div>
    </section>
  );
}
