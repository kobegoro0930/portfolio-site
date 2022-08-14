import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'dntepwqgo1',
  apiKey: process.env.API_KEY,
});
