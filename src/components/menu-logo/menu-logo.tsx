import { component$ } from '@builder.io/qwik';
import {MenuLogoSpan} from "./menu-span";

const MenuLogo = component$(() => {
  return (
    <h1 className="font-display text-2xl md:text-6xl flex flex-col uppercase font-medium tracking-widest pt-8 md:pt-16 pl-8 md:pl-16 leading-none text-on-secondary-default">
      {['Good', 'Morning', 'Harwood'].map((text, index) => {
        return (
          <MenuLogoSpan index={index} key={text}>
            {text}
          </MenuLogoSpan>
        );
      })}
    </h1>
  );
});

export { MenuLogo };