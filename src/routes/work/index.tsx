import { component$, useClientEffect$ } from "@builder.io/qwik";
import { builder } from '@builder.io/sdk'


export default component$(() => {
  useClientEffect$(() => {
    builder.init('bfe02904facd4583b37f3468b0850052');
    builder.get('articles').promise().then(({ data }) => {
      console.log(data);
    })
  })
  return (
    <>
      <div className="pt-18 bg-secondary-default">
        <ul>

        </ul>
      </div>
    </>

  )
});
