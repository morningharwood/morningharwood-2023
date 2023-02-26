import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/container";
import { Typography } from "~/components/typography";
import type { PostHeaderT } from "~/components/post-header/types";

const PostHeader = component$((props: PostHeaderT) => {
  const { background, eyebrowText, headingText, paragraphText, categories } = props;
  console.log(props);
  return (
    <Container
      background={background}
      overrides="py-16 px-8 lg:pt-20 pb-30 lg:px-5"
    >
      <div className="flex flex-col">
        <div className="border-b border-tertiary-focus pb-12">
          <Typography preset="eyebrow" text={eyebrowText} variant={"h2"} />
          <Typography
            preset="heading1"
            text={headingText}
            variant={"h1"}
            overrides="my-2 lg:my-5 -ml-1 lg:-ml-2"
          />
          <Typography preset="paragraph" text={paragraphText} variant={"p"} />
        </div>
      </div>
      <div className="flex mt-5 pt-5">
        <div className="inline-flex flex-col flex-wrap sm:max-h-1/3 lg:max-h-1/4">
          {categories?.map((category) => {
            return (
              <div className="mb-5 pr-10">
                <Typography variant={"h4"} preset="xsEyebrow" text={category.text} />
                {category?.items?.map((item) => {
                  return (
                    <Typography variant={"p"} preset="LabelSmall" text={item?.text} />
                  );
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  );
});

export { PostHeader };
