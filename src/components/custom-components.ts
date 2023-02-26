import { Typography } from "./typography";
import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { PostHeader } from "~/components/post-header";
import { PostHeaderSchema } from "~/components/post-header/schema";
import { TypographySchema } from "~/components/typography/schema";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
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
];
