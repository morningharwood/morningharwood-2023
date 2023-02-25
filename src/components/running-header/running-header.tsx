import { component$, useBrowserVisibleTask$, useSignal } from '@builder.io/qwik';
import { useFlyInOnce } from '~/hooks/use-fly-in-once';
import { shuffle } from '~/utils/shuffle';
import { interests } from './interests';

const RunningHeader = component$(() => {
  const animatedRef = useFlyInOnce(8);
  const count = useSignal(0);
  const play = useSignal(true);
  const shuffledInterests = shuffle(interests);
  const interestsMaxIndex = shuffledInterests.length - 1;

  useBrowserVisibleTask$(() => {
    setInterval(() =>{
      if (play.value) {
        const next = count.value + 1;
        count.value = next % interestsMaxIndex;
      }
    }, 1000);
  });

  return (
    <p
      class="font-normal text-xs flex justify-start items-center opacity-0 w-full"
      ref={animatedRef}
      onMouseEnter$={() => play.value = false}
      onMouseLeave$={() => play.value = true}
    >
      <span class="text-xs pr-2 font-sans">Contact me about</span>
      <a
        href="mailto:matthhar12@gmail.com"
        class="text-xs bg-primary-default text-on-primary-default hover:bg-accentA-hover hover:text-on-accentA-hover py-2 px-2 rounded-full capitalize font-sans no-underline"
      >
        {shuffledInterests[count.value].name}
      </a>
    </p>
  );
});

export { RunningHeader };
