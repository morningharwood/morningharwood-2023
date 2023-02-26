import type { BgClasses } from "~/components/container/types";

export type PostHeaderT = {
  background: BgClasses;
  eyebrowText: string;
  headingText: string;
  paragraphText: string;
  categories: {
    text: string,
    items: {text: string}[]
  }[]
};
