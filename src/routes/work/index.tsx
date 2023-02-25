import { component$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

import { WorkItem } from "~/components/work-item";
import type { WorkItemT } from "~/components/work-item/types";

export const useWorks = loader$(async () => {
  return await fetch(
    "https://cdn.builder.io/api/v2/content/articles?apiKey=bfe02904facd4583b37f3468b0850052"
  ).then((resp) => resp.json());
});

export default component$(() => {
  const data = useWorks();
  return (
    <div className="pt-18 bg-secondary-default">
      <ul>
        {data?.value?.results.map(({ data }: { data: WorkItemT }) => {
          const { title, description, poster, href } = data;
          return (
            (
              <li>
                <WorkItem
                  title={title}
                  description={description}
                  poster={poster}
                  href={href}
                />
              </li>
            ) ?? (
              <li>
                <p>No Articles :(</p>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
});
