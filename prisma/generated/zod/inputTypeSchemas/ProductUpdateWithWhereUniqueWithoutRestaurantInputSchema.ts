import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateWithoutRestaurantInputSchema } from './ProductUpdateWithoutRestaurantInputSchema';
import { ProductUncheckedUpdateWithoutRestaurantInputSchema } from './ProductUncheckedUpdateWithoutRestaurantInputSchema';

export const ProductUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutRestaurantInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default ProductUpdateWithWhereUniqueWithoutRestaurantInputSchema;
