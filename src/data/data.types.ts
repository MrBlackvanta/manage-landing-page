import type { StaticImageData } from "next/image";

export type Link = {
  label: string;
  href: string;
};

export type NavLink = Link;

export type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type SocialLink = Link & {
  icon: Icon;
};

export type SectionIntro = {
  title: string;
  description: string;
};

export type HeroContent = SectionIntro & {
  cta: Link;
};

export type CtaContent = {
  title: string;
  cta: Link;
};

export type Feature = SectionIntro;

export type Testimonial = {
  name: string;
  quote: string;
  avatar: StaticImageData;
};
