import { component$ } from "@builder.io/qwik";

const Toggle = component$(() => {
  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        onClick$={(val) => {
          const r = document.querySelector(":root") as HTMLElement;
          const v = val;
          // @ts-ignore
          const isChecked = v.target.checked;

          if (isChecked) {
            r.style.setProperty("--primary-400", "#f7fafc");
            r.style.setProperty("--primary-500", "#edf0f7");
            r.style.setProperty("--primary-600", "#cbd5e0");
            r.style.setProperty("--primary-700", "#a0aec0");
            r.style.setProperty("--primary-800", "#718096");

            r.style.setProperty("--secondary-400", "#2d3748");
            r.style.setProperty("--secondary-500", "#1a202c");
            r.style.setProperty("--secondary-600", "#10131a");
            r.style.setProperty("--secondary-700", "#0d1016");
            r.style.setProperty("--secondary-800", "#000000");
          } else {
            r.style.setProperty("--secondary-400", "#f7fafc");
            r.style.setProperty("--secondary-500", "#edf0f7");
            r.style.setProperty("--secondary-600", "#cbd5e0");
            r.style.setProperty("--secondary-700", "#a0aec0");
            r.style.setProperty("--secondary-800", "#718096");

            r.style.setProperty("--primary-400", "#2d3748");
            r.style.setProperty("--primary-500", "#1a202c");
            r.style.setProperty("--primary-600", "#10131a");
            r.style.setProperty("--primary-700", "#0d1016");
            r.style.setProperty("--primary-800", "#000000");
          }
        }}
        value=""
        class="sr-only peer"
      />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
});

export { Toggle };
