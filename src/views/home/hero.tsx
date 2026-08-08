import Image from "next/image";
import illustration from "@/assets/images/illustration-intro.svg";
import { hero } from "@/data";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="v-container grid gap-y-4.75 pt-12 pb-23.25 lg:grid-cols-[465fr_540fr] lg:items-center lg:gap-x-[9.46%] lg:pt-30 lg:pb-33"
    >
      <div className="row-start-2 mx-auto max-w-lg text-center lg:row-start-1 lg:mx-0 lg:max-w-none lg:text-left">
        <h1
          id="hero-title"
          className="text-display-sm font-bold tracking-display-sm text-dark-blue lg:text-display lg:tracking-tight"
        >
          {hero.title}
        </h1>
        <p className="mt-2.25 text-body/7 lg:mt-8.5 lg:max-w-87.5 lg:text-body">
          {hero.description}
        </p>
        <a
          href={hero.cta.href}
          className="mt-7.25 v-btn v-btn-primary lg:mt-10"
        >
          {hero.cta.label}
        </a>
      </div>

      <div className="row-start-1 mx-auto w-full max-w-79.5 lg:max-w-none">
        <Image
          src={illustration}
          alt=""
          priority
          fetchPriority="high"
          className="m-[-3.705%] w-[107.41%] max-w-none"
        />
      </div>
    </section>
  );
}
