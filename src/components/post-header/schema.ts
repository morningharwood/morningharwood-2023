import { ContainerSchema } from "~/components/container/schema";

const PostHeaderSchema = [
  ...ContainerSchema,
  { name: "eyebrowText", type: "string" },
  { name: "headingText", type: "string" },
  { name: "paragraphText", type: "string" },
];

export { PostHeaderSchema };
