"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/data";
import { cn } from "@/lib";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialSlider({ testimonials }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const select = () => setActive(embla.selectedScrollSnap());
    embla.on("select", select);
    return () => {
      embla.off("select", select);
    };
  }, [embla]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") embla?.scrollPrev();
      else if (event.key === "ArrowRight") embla?.scrollNext();
      else return;
      event.preventDefault();
    },
    [embla],
  );

  return (
    <>
      <div
        ref={emblaRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        onKeyDown={onKeyDown}
        className="v-slider v-focus-ring"
      >
        <ul className="-ml-7.5 flex">
          {testimonials.map(({ name, quote, avatar }) => (
            <li
              key={name}
              className="w-[min(23.125rem,100%-2.1875rem)] shrink-0 pl-7.5 lg:w-142.5"
            >
              <figure className="relative mt-9 flex flex-col items-center bg-very-light-gray px-5 pt-15 pb-10.5 text-center lg:px-10 lg:pb-10">
                <figcaption className="text-title font-bold tracking-tight text-dark-blue">
                  {name}
                </figcaption>
                <blockquote className="mt-4.75 text-body-sm/6.5 lg:text-body">
                  {quote}
                </blockquote>
                <Image
                  src={avatar}
                  alt=""
                  draggable={false}
                  className="absolute -top-9 size-18 rounded-full"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-1.5 flex justify-center lg:hidden">
        {testimonials.map(({ name }, index) => (
          <button
            key={name}
            type="button"
            aria-label={`Show testimonial from ${name}`}
            aria-current={index === active}
            onClick={() => embla?.scrollTo(index)}
            className="flex size-6 items-center justify-center"
          >
            <span
              className={cn("size-1.75 rounded-full border border-bright-red", {
                "bg-bright-red": index === active,
              })}
            />
          </button>
        ))}
      </div>
    </>
  );
}
