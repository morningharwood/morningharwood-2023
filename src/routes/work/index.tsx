import { component$} from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { builder } from '@builder.io/sdk'



export const useWorks = loader$(async() => {
  builder.init('bfe02904facd4583b37f3468b0850052')
  const {data} = await builder.get('articles').promise()
  return data;
});

export default component$(() => {
  const data = useWorks();

  return (
    <pre>
      {data.value}
    </pre>

  )
});
