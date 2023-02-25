// import { useMount } from '../use-mount/use-mount';
import { useBrowserVisibleTask$, useSignal } from "@builder.io/qwik";
import { isNil } from "~/utils/is-nil";

const useFlyInOnce = (delay: number, startPos = [0, "175%", 0]) => {
  const ref = useSignal<Element>();
  useBrowserVisibleTask$(() => {
    if (typeof document === "undefined" || isNil(ref?.value)) return;
    const keyframe = [
      { transform: `translate3D(${startPos.join(",")})`, opacity: 0 },
      { transform: "translate3D(0, 0, 0)", opacity: 1 },
    ];

    // @ts-ignore
    ref.value.animate(keyframe, {
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      duration: 450,
      delay: delay * (250 / 4),
      fill: "forwards",
    });
  });
  return ref;
};

export { useFlyInOnce };
