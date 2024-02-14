import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string({required_error: "Ingrese un nombre al producto"}).min(3, { message: "Ingrese un nombre al producto" }),
  description: z.string().optional().nullable(),
  price: z.number({ invalid_type_error: "Ingrese un precio válido"}).min(0, {message: "Ingrese un monto mayor o igual a 0"}),
  restaurantId: z.number().int(),
  categoryId: z.number().int().optional().nullable()
}).strict();

export default ProductCreateManyInputSchema;
