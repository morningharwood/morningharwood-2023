import { component$, Slot } from "@builder.io/qwik";
import { useFlyInOnce } from "~/hooks/use-fly-in-once";
import { isNil } from "~/utils/is-nil";
import type { MenuItem } from "./types";

const MenuNavigationItem = component$((props : MenuItem) => {
    const { href, ariaLabel, index } = props;
  
    const animeRef = useFlyInOnce(index);
    if (isNil(href)) {
      return null;
    }
  
    return (
      <a
        class="text-on-secondary-default hover:text-on-accentA-hover no-underline"
        aria-label={ariaLabel}
        href={href}
      >
        <div class="relative text-right py-1 md:py-2 overflow-hidden">
          <div>
            <span
              ref={animeRef}
              class="block text-3xl md:text-6xl text-right leading-none mr-8 md:mr-16 capitalize font-bold opacity-0 font-display tracking-tightest hover:bg-accentA-hover"
            >
              <Slot />
            </span>
            <span class="font-mono text-xs text-on-secondary-default transform rotate-90">
              0{index}
            </span>
          </div>
        </div>
      </a>
    );
  });
  
  export {
    MenuNavigationItem
  }