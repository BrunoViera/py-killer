import { z } from "zod";

export const productSchema = z.object({
  // id: z.number().nullish(),
  uuid: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
});

export type Product = z.infer<typeof productSchema>;
