import { ContainerSchema } from "~/components/container/schema";

const PostHeaderSchema = [
  ...ContainerSchema,
  { name: "eyebrowText", type: "string" },
  { name: "headingText", type: "string" },
  { name: "paragraphText", type: "string" },
  {name: "categories", type: "list", subFields: [
      {
        name: 'text', type: 'string',
      },
      {
        name: 'items', type: "list",
        subFields: [
          {
            name: 'text', type: 'string',
          },
        ]
      }
    ]}
];

export { PostHeaderSchema };
