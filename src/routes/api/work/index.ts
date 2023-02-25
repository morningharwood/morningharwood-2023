import type { RequestHandler } from "@builder.io/qwik-city";
import { builder } from "@builder.io/sdk";
import { json } from "stream/consumers";


// interface ProductData {
//   skuId: string;
//   price: number;
//   description: string;
// }
export const onGet: RequestHandler = async ({ json }) => {
  builder.init('bfe02904facd4583b37f3468b0850052');
  const { data } = await builder.get('articles').promise();

  json(200, data);
};