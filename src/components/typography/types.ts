export type TypographKeys =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "mono"
  | "paragraph"
  | "eyebrow"
  | "LabelSmall"
  | "xsEyebrow";
export type TypographyPreset = {
  [k in TypographKeys]: {
    variant: string;
    class: string;
  };
};
