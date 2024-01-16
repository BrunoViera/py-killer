import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateWithoutRestaurantInputSchema } from './ProductUpdateWithoutRestaurantInputSchema';
import { ProductUncheckedUpdateWithoutRestaurantInputSchema } from './ProductUncheckedUpdateWithoutRestaurantInputSchema';
import { ProductCreateWithoutRestaurantInputSchema } from './ProductCreateWithoutRestaurantInputSchema';
import { ProductUncheckedCreateWithoutRestaurantInputSchema } from './ProductUncheckedCreateWithoutRestaurantInputSchema';

export const ProductUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutRestaurantInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutRestaurantInputSchema),z.lazy(() => ProductUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default ProductUpsertWithWhereUniqueWithoutRestaurantInputSchema;
