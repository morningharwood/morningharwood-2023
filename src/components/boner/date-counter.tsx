import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
export const getAge = (birthDate: string) => {
  const date = new Date();
  const time = new Date(birthDate).getTime();

  // @ts-ignore
  const diff = (date - time) / 3.15576e10;
  return Math.floor(diff);
};

export const range = (size: number, startAt = 0) => {
  // @ts-ignore
  return [...Array(size).keys()].map((i) => i + startAt);
};

type PropsType = {
  inView: boolean;
};
const DateCounter = component$(({ inView = true }: PropsType) => {
  const BIRTH_YEAR = "1985-09-03";
  const count = useSignal(0);
  const mattAge = getAge(BIRTH_YEAR);
  const years = range(mattAge + 1, new Date().getFullYear() - mattAge);

  useBrowserVisibleTask$(() => {
    setInterval(() => {
      if (inView) {
        const len = years.length - 1;
        const next = count.value + 1;
        count.value = Math.min(next, len);
      }
    }, 80);
  });

  return <span className="pl-1 pr-1">{years[count.value]} </span>;
});

export { DateCounter };
