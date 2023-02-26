import { component$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { builder } from "@builder.io/sdk";

import type { DocumentHead } from "@builder.io/qwik-city";
import type { MenuItem } from "~/components/menu-navigation/types";

import { MenuLogo } from "~/components/menu-logo/menu-logo";
import { Boner } from "~/components/boner/boner";
import { MenuNavigation } from "~/components/menu-navigation/menu-navigation";
import { MenuNavigationItem } from "~/components/menu-navigation/menu-navigation-item";
import { RunningHeader } from "~/components/running-header/running-header";

export const useMenuItems = loader$(async () => {
  builder.init("bfe02904facd4583b37f3468b0850052");
  const { data } = await builder.get("main-router-links").promise();
  return data;
});

export default component$(() => {
  const data = useMenuItems();
  return (
    <main class="md:grid md:grid-rows-2 md:grid-cols-2 h-screen relative z-10 bg-secondary-default">
      <MenuLogo />
      <div class="md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
        <RunningHeader />
      </div>
      <MenuNavigation>
        {data.value.links?.map((item: MenuItem, index: number) => {
          return (
            <MenuNavigationItem
              key={item?.title}
              href={item?.href}
              ariaLabel={item?.ariaLabel}
              index={index}
              title={item?.title}
            />
          );
        })}
      </MenuNavigation>
      <Boner />
    </main>
  );
});

export const head: DocumentHead = {
  title: "MorningHarwood - Works",
  meta: [
    {
      name: "Morningharwood - Works",
      content: "A list of all my project work over my career",
    },
  ],
};
