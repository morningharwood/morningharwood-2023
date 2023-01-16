import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {MenuLogo} from "../components/menu-logo/menu-logo";
import {Boner} from "../components/boner/boner";

export default component$(() => {
  return (
    <main className="md:grid md:grid-rows-2 md:grid-cols-2 h-screen relative z-10 bg-secondary-default">
      <MenuLogo />
      <div className="md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
        {/*<RunningHeader />*/}
      </div>
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
