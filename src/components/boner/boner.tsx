import anime from 'animejs';

// import { DateCounter } from '../date-counter/date-counter';
import {component$, useBrowserVisibleTask$, useSignal} from "@builder.io/qwik";
import {DateCounter} from "./date-counter";

const Boner = component$(() => {
  const ref =  useSignal<Element>();
  const ref2 =  useSignal<Element>();
  const inView = useSignal(false);

  useBrowserVisibleTask$(() => {
    const isNotPortrait = window?.innerWidth / window?.innerHeight >= 1;
    const rotateZValue = isNotPortrait
      ? -((Math.atan(window?.innerHeight / window?.innerWidth) * 180) / Math.PI)
      : -30;

    anime({
      targets: ref.value,
      transformOrigin: ['0 50%', '50% 50%'],
      scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1000 },
      ],
      rotateZ: [
        { value: 0, duration: 0, delay: 800 },
        {
          value: rotateZValue,
          duration: 2000,
          delay: 800,
          easing: 'spring(1, 100, 5, 5)',
        },
      ],
      duration: 4000,
      easing: 'easeInOutSine',
    });
    anime({
      targets: ref2.value,
      delay: 4000,
      translateY: [
        { value: -50, duration: 0 },
        { value: 1, duration: 550 },
      ],
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1650 },
      ],
      duration: 350,
      easing: 'easeInOutSine',
      update(anim: { progress: number; }) {
        if (anim.progress >= 100) {
          inView.value = true;
        }
      },
    });
  });

  return (
    <div
      className="absolute z-0 inset-0 flex justify-center items-center pointer-events-none lg:px-20 lg:py-16 py-4 px-6"
      data-name="Boner"
    >
      <div
        className="w-3/4 md:w-3/4 xl:w-1/2 h-16 md:h-40 bg-primary-default elevation-24 relative"
        ref={ref}
      >
        <p
          className="absolute -bottom-6 right-0 text-on-secondary-default text-xs font-mono mt-14 flex"
          ref={ref2}
        >
          <span className="flex items-center transform translate-y-1">©</span>
          <DateCounter inView={inView.value}/>
          <span className="uppercase">MorningHarwood</span>
        </p>
      </div>
    </div>
  );
});

export { Boner };