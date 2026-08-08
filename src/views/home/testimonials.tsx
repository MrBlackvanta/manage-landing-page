import TestimonialSlider from "@/components/testimonial-slider";
import { testimonials, testimonialsCta, testimonialsTitle } from "@/data";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="pb-10.5 lg:pb-45">
      <div className="v-reveal">
        <h2
          id="testimonials-title"
          className="v-container text-center text-heading-sm font-bold tracking-heading-sm text-dark-blue lg:text-heading lg:tracking-tight"
        >
          {testimonialsTitle}
        </h2>

        <div className="mt-15.5 lg:mt-19.5">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>

      <div className="v-container mt-11.75 flex justify-center lg:mt-12">
        <a href={testimonialsCta.href} className="v-btn v-btn-primary">
          {testimonialsCta.label}
        </a>
      </div>
    </section>
  );
}
