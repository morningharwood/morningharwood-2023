import { component$ } from "@builder.io/qwik";
import type { WorkItemT } from "./types";

const WorkItem = component$((props: WorkItemT) => {
  const { title, description, href, poster } = props;

  return (
    <div className="h-screen px-4 md:px-16 relative pb-4 md:pb-16">
      <div className="h-full w-full flex flex-col justify-center items-center text-center relative bg-primary-default">
        <img
          src={poster}
          alt=""
          className="inset-0 absolute h-full w-full object-fill p-12 md:p-48 justify-center items-center self-center opacity-10 mix-blend-multiply"
        />
        <div className="flex flex-col items-center justify-center px-4 md:px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 relative ">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tightest text-on-primary-default font-medium font-display">
            {title}
          </h2>
          <p className="font-normal md:font-normal text-md md:text-md mt-3 mb-10 text-on-primary-default font-body xl:w-6/12">
            {description}
          </p>
          <a
            href={href}
            className="bg-secondary-default text-on-secondary-default hover:text-on-secondary-hover hover:bg-secondary-hover px-10 py-4 font-normal cursor-pointer uppercase hover:bg-primary-hover tracking-widest no-underline"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
});

export { WorkItem };
