const TypographySchema = [
  { name: "text", type: "string" },
  {
    name: "preset",
    type: "text",
    enum: [
      "heading1",
      "heading2",
      "heading3",
      "heading4",
      "mono",
      "eyebrow",
      "paragraph",
      "custom",
    ],
  },
  { name: "class", type: "string" },
  {
    name: "variant",
    type: "string",
    enum: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
  },
];
export { TypographySchema };
