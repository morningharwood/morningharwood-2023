import { Typography } from "./typography";
import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { PostHeader } from "~/components/post-header";
import { PostHeaderSchema } from "~/components/post-header/schema";
import { TypographySchema } from "~/components/typography/schema";
import { Toggle } from "~/components/toggle";
import { ToggleSchema } from "~/components/toggle/schema";
import { Summary } from "~/components/summary";
import { SummarySchema } from "~/components/summary/schema";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Toggle,
    name: "Toggle DarkMode",
    inputs: [...ToggleSchema],
  },
  {
    component: PostHeader,
    name: "PostHeader",
    inputs: [...PostHeaderSchema],
  },
  {
    component: Typography,
    name: "Typography",
    inputs: [...TypographySchema],
  },
  {
    component: Summary,
    name: "Summary",
    inputs: [...SummarySchema],
  },
];
