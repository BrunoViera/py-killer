import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  name: z.string({required_error: "Ingrese un nombre al producto"}).min(3, { message: "Ingrese un nombre al producto" }),
  description: z.string().nullable(),
  price: z.number({ invalid_type_error: "Ingrese un precio válido"}).min(0, {message: "Ingrese un monto mayor o igual a 0"}),
  restaurantId: z.number().int(),
  categoryId: z.number().int().nullable(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
