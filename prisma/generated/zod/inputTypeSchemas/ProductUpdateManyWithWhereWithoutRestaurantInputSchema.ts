import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductScalarWhereInputSchema } from './ProductScalarWhereInputSchema';
import { ProductUpdateManyMutationInputSchema } from './ProductUpdateManyMutationInputSchema';
import { ProductUncheckedUpdateManyWithoutRestaurantInputSchema } from './ProductUncheckedUpdateManyWithoutRestaurantInputSchema';

export const ProductUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default ProductUpdateManyWithWhereWithoutRestaurantInputSchema;
