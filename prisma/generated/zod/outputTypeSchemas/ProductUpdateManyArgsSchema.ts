import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProductUpdateManyMutationInputSchema'
import { ProductUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateManyInputSchema'
import { ProductWhereInputSchema } from '../inputTypeSchemas/ProductWhereInputSchema'

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict()

export default ProductUpdateManyArgsSchema;
