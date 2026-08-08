import ali from "@/assets/images/avatar-ali.webp";
import anisha from "@/assets/images/avatar-anisha.webp";
import richard from "@/assets/images/avatar-richard.webp";
import shanai from "@/assets/images/avatar-shanai.webp";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import type {
  CtaContent,
  Feature,
  HeroContent,
  Link,
  NavLink,
  SectionIntro,
  SocialLink,
  Testimonial,
} from "./data.types";

export const navLinks: NavLink[] = [
  { label: "Pricing", href: "#" },
  { label: "Product", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Community", href: "#" },
];

export const hero: HeroContent = {
  title: "Bring everyone together to build better products.",
  description:
    "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
  cta: { label: "Get Started", href: "#" },
};

export const featuresIntro: SectionIntro = {
  title: "What’s different about Manage?",
  description:
    "Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.",
};

export const features: Feature[] = [
  {
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export const testimonialsTitle = "What they’ve said";

export const testimonials: Testimonial[] = [
  {
    name: "Anisha Li",
    quote:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    avatar: anisha,
  },
  {
    name: "Ali Bravo",
    quote:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    avatar: ali,
  },
  {
    name: "Richard Watts",
    quote:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    avatar: richard,
  },
  {
    name: "Shanai Gough",
    quote:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    avatar: shanai,
  },
];

export const testimonialsCta: Link = { label: "Get Started", href: "#" };

export const cta: CtaContent = {
  title: "Simplify how your team works today.",
  cta: { label: "Get Started", href: "#" },
};

export const footerLinkColumns: Link[][] = [
  [
    { label: "Home", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Products", href: "#" },
    { label: "About Us", href: "#" },
  ],
  [
    { label: "Careers", href: "#" },
    { label: "Community", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
];

export const socialLinks: SocialLink[] = [
  { label: "Manage on Facebook", href: "#", icon: FacebookIcon },
  { label: "Manage on YouTube", href: "#", icon: YoutubeIcon },
  { label: "Manage on Twitter", href: "#", icon: TwitterIcon },
  { label: "Manage on Pinterest", href: "#", icon: PinterestIcon },
  { label: "Manage on Instagram", href: "#", icon: InstagramIcon },
];

export const copyright = "Copyright 2020. All Rights Reserved";
