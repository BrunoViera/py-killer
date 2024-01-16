import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductCreateManyRestaurantInputSchema } from './ProductCreateManyRestaurantInputSchema';

export const ProductCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyRestaurantInputSchema),z.lazy(() => ProductCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ProductCreateManyRestaurantInputEnvelopeSchema;
