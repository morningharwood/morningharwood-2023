import { component$, Slot } from "@builder.io/qwik";
import { useFlyInOnce } from "../../hooks/use-fly-in-once";
type PropsTypeSpan = {
  index: number;
};
const MenuLogoSpan = component$((props: PropsTypeSpan) => {
  const { index } = props;

  const ref = useFlyInOnce(index);
  return (
    <div class="overflow-y-hidden">
      <span ref={ref} class="flex opacity-0">
        <Slot />
      </span>
    </div>
  );
});

export { MenuLogoSpan };
