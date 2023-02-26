import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead} from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { getContent, RenderContent, getBuilderSearchParams } from "@builder.io/sdk-qwik";
import {CUSTOM_COMPONENTS} from '../../../components/custom-components';

export const BUILDER_PUBLIC_API_KEY = "bfe02904facd4583b37f3468b0850052";
export const BUILDER_MODEL = "page";

export default component$(() => {
  const location = useLocation();
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: BUILDER_PUBLIC_API_KEY,
      options: getBuilderSearchParams(location.query),
      userAttributes: {
        urlPath: location.pathname || "/",
      },
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={BUILDER_PUBLIC_API_KEY}
          customComponents={CUSTOM_COMPONENTS}
        />
      )}
    />
  );
});

export const head: DocumentHead = () => {
  return {
    title: "MorningHarwood - Works",
    meta: [{
      name: "Morningharwood - Works",
      content: "A list of all my project work over my career",
    },
  ]}
};
