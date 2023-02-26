import { component$ } from "@builder.io/qwik";
import { TypographyPresets } from "./presets";
import type { TypographKeys } from "./presets";
import { classnames } from "~/utils/classnames";

type Typography = {
  text: string;
  preset: TypographKeys;
  variant?: string;
  overrides?: string;
};

export const Typography = component$((props: Typography) => {
  const fields = TypographyPresets[props.preset];

  const Tag = props.variant ? props.variant : (fields?.variant as any);
  return (
    <Tag class={classnames(fields?.class, props.overrides)}>{props.text}</Tag>
  );
});
