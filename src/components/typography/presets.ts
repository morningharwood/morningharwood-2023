// https://baseweb.design/components/typography/
// TODO ^^ Make all these styles

import type { TypographyPreset } from "~/components/typography/types";

const TypographyPresets: TypographyPreset = {
  heading1: {
    variant: "h1",
    class:
      "text-primary-default text-2xl lg:text-5xl text-left font-display uppercase leading-none",
  },
  heading2: {
    variant: "h2",
    class:
      "text-primary-default text-2xl text-left font-display sm:text-3xl lg:text-4xl leading-none",
  },
  heading3: {
    variant: "h3",
    class:
      "text-primary-default text-xl text-left font-display tracking-tightest sm:text-2xl lg:text-3xl",
  },
  heading4: {
    variant: "h4",
    class:
      "text-primary-default text-xl text-left font-display tracking-tightest md:text-2xl",
  },
  mono: {
    variant: "span",
    class: "text-primary-default text-base text-left font-mono",
  },
  paragraph: {
    variant: "p",
    class: "text-primary-default text-base lg:text-lg text-left font-sans",
  },
  eyebrow: {
    variant: "span",
    class:
      "text-primary-default text-xs text-left font-sans font-bold uppercase",
  },
  LabelSmall: {
    variant: "p",
    class: "text-primary-default text-xs text-left font-sans font-bold",
  },
  xsEyebrow: {
    variant: "h4",
    class:
      "text-primary-default text-xxs text-left font-sans font-bold uppercase opacity-50",
  },
};

export { TypographyPresets };
