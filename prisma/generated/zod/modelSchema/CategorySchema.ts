import { z } from 'zod';

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  name: z.string({ required_error: "Ingrese un nombre a la categoria",  }).min(3),
  description: z.string().nullable(),
  restaurantId: z.number().int(),
})

export type Category = z.infer<typeof CategorySchema>

export default CategorySchema;
