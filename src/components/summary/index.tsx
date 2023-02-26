import { component$ } from "@builder.io/qwik";
import type { SummaryProps } from "~/components/summary/types";
import { Typography } from "~/components/typography";
import { Container } from "~/components/container";

const Summary = component$((props: SummaryProps) => {
  const { background, headingText, paragraphText, eyebrowText } = props;
  return (
    <Container background={background} overrides="px-5 pt-20 pb-32">
      <section class="flex flex-col items-center">
        <div class="container grid grid-cols-6">
          <div class="col-span-6 lg:col-span-6 flex flex-col">
            <Typography text={eyebrowText} preset="xsEyebrow" />
            <Typography
              text={headingText}
              preset="heading2"
              overrides="uppercase mb-3"
            />
            <Typography text={paragraphText} preset="paragraph" />
          </div>
        </div>
      </section>
    </Container>
  );
});

export { Summary };
