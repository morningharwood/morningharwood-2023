import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/container";
import { Typography } from "~/components/typography";
import type { PostHeaderT } from "~/components/post-header/types";

const PostHeader = component$((props: PostHeaderT) => {
  const { background, eyebrowText, headingText, paragraphText, categories } =
    props;
  return (
    <Container
      background={background}
      overrides="py-16 px-5 lg:pt-20 pb-30 lg:px-5"
    >
      <div class="flex flex-col">
        <div class="border-b border-tertiary-focus pb-12">
          <Typography preset="eyebrow" text={eyebrowText} variant={"h2"} />
          <Typography
            preset="heading1"
            text={headingText}
            variant={"h1"}
            overrides="my-1 lg:my-2 lg:-ml-1 line-height-0"
          />
          <Typography preset="paragraph" text={paragraphText} variant={"p"} />
        </div>
      </div>
      <div class="flex mt-5 pt-5">
        <div class="inline-flex flex-col flex-wrap sm:max-h-1/3 lg:max-h-1/4">
          {categories?.map((category) => {
            return (
              <div class="mb-5 pr-10" key={category?.text}>
                <Typography
                  variant={"h4"}
                  preset="xsEyebrow"
                  text={category.text}
                />
                {category?.items?.map((item) => {
                  return (
                    <Typography
                      key={item?.text}
                      variant={"p"}
                      preset="LabelSmall"
                      text={item?.text}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
});

export { PostHeader };
