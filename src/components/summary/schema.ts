import { ContainerSchema } from "~/components/container/schema";

const SummarySchema = [
  ...ContainerSchema,
  { name: "eyebrowText", type: "string" },
  { name: "headingText", type: "string" },
  { name: "paragraphText", type: "longText" },
];

export { SummarySchema };
