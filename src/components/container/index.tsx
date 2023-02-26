import { component$, Slot } from "@builder.io/qwik";
import type { BgClasses } from "~/components/container/types";
import { classnames } from "~/utils/classnames";

type ContainerT = {
  background: BgClasses;
  overrides: string;
};

const Container = component$((props: ContainerT) => {
  const { background, overrides } = props;
  const ColorMap = {
    primary: "bg-primary-default",
    secondary: "bg-secondary-default",
    tertiary: "bg-tertiary-default",
  } as any;
  return (
    <div class={classnames(ColorMap[background], overrides)}>
      <div class="container mx-auto">
        <div class="transition duration-500 ease-in-out w-full h-full opacity-100">
          <Slot />
        </div>
      </div>
    </div>
  );
});

export { Container };
