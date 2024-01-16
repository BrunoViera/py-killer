import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutRestaurantInputSchema } from './ProductCreateWithoutRestaurantInputSchema';
import { ProductUncheckedCreateWithoutRestaurantInputSchema } from './ProductUncheckedCreateWithoutRestaurantInputSchema';

export const ProductCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutRestaurantInputSchema),z.lazy(() => ProductUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutRestaurantInputSchema;
