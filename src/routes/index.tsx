import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MenuLogo } from "../components/menu-logo/menu-logo";
import { Boner } from "../components/boner/boner";
import { MenuNavigation } from '~/components/menu-navigation/menu-navigation';
import { MenuNavigationItem } from '~/components/menu-navigation/menu-navigation-item';
import type { MenuItem } from '~/components/menu-navigation/types';
import { RunningHeader } from '~/components/running-header/running-header';




export default component$(() => {
  const MenuItems = {
    menuItems: [
      {title: 'Work', slug: {current: 'work', href: '/work/', ariaLabel: 'work'}},
      {title: 'Labs', slug: {current: 'labs', href: '/labs/', ariaLabel: 'labs'}},
      {title: 'Portfolio', slug: {current: 'portfolio', href: '/portfolio/', ariaLabel: 'portfolio'}}
  ]};
  return (
    <main class="md:grid md:grid-rows-2 md:grid-cols-2 h-screen relative z-10 bg-secondary-default">
      <MenuLogo />
      <div class="md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
        <RunningHeader />
      </div>
      <MenuNavigation>
        {MenuItems.menuItems?.map((item: MenuItem, index: number) => {
          return (
            <MenuNavigationItem
              key={item?.slug?.current}
              href={item?.slug?.current}
              ariaLabel={item?.ariaLabel}
              index={index}
            >
              {item?.title}
            </MenuNavigationItem>
          );
        })}
      </MenuNavigation>
      <Boner />
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Good Morning Harwood',
  meta: [
    {
      name: 'Morningharwood',
      content: 'A digital portfolio for Matthew Harwood',
    },
  ],
};
