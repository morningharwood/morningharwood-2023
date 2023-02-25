import { Slot, component$ } from "@builder.io/qwik";

const MenuNavigation = component$(() => {
  return (
    <nav class="fixed bottom-0 right-0 items-end md:grid md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-5 lg:col-start-4 items-end pr-4 pb-8 md:pb-16 md:pr-16 box-border">
      <Slot />
    </nav>
  );
});

export { MenuNavigation };
