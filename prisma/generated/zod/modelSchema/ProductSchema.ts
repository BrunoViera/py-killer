import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  price: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  restaurantId: z.number().int(),
  categoryId: z.number().int().nullable(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
