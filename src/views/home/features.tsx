import { features, featuresIntro } from "@/data";

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="v-container grid pb-15.5 max-lg:px-4 lg:grid-cols-[445fr_540fr] lg:gap-x-[11.26%] lg:pb-36.5"
    >
      <div className="mx-auto max-w-lg v-reveal text-center lg:mx-0 lg:max-w-none lg:text-left">
        <h2
          id="features-title"
          className="text-heading-sm font-bold tracking-heading-sm text-dark-blue lg:text-heading lg:tracking-tight"
        >
          {featuresIntro.title}
        </h2>
        <p className="mt-3.25 text-body-sm lg:mt-8 lg:max-w-87.5 lg:text-body">
          {featuresIntro.description}
        </p>
      </div>

      <ol className="mt-13.5 flex flex-col gap-11.75 lg:mt-0 lg:gap-10">
        {features.map(({ title, description }, index) => (
          <li key={title} className="v-reveal">
            <div className="-mr-4 flex items-center gap-4 rounded-l-pill bg-very-pale-red lg:mr-0 lg:gap-7 lg:rounded-none lg:bg-transparent">
              <span className="flex h-9.75 w-16.75 shrink-0 items-center justify-center rounded-pill bg-bright-red text-title font-bold tracking-tight text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-title font-bold tracking-tight text-dark-blue">
                {title}
              </h3>
            </div>
            <p className="mt-2 max-w-lg text-body-sm lg:mt-2.25 lg:ml-23.75 lg:max-w-none lg:text-body">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
