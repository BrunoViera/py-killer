import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutProductInputSchema } from './RestaurantCreateNestedOneWithoutProductInputSchema';
import { CategoryCreateNestedOneWithoutProductsInputSchema } from './CategoryCreateNestedOneWithoutProductsInputSchema';

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string({required_error: "Ingrese un nombre al producto"}).min(3, { message: "Ingrese un nombre al producto" }),
  description: z.string().optional().nullable(),
  price: z.number({ invalid_type_error: "Ingrese un precio válido"}).min(0, {message: "Ingrese un monto mayor o igual a 0"}),
  restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutProductInputSchema),
  Category: z.lazy(() => CategoryCreateNestedOneWithoutProductsInputSchema).optional()
}).strict();

export default ProductCreateInputSchema;
