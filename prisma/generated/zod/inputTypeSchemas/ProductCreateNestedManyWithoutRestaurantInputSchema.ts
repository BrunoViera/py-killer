import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductCreateWithoutRestaurantInputSchema } from './ProductCreateWithoutRestaurantInputSchema';
import { ProductUncheckedCreateWithoutRestaurantInputSchema } from './ProductUncheckedCreateWithoutRestaurantInputSchema';
import { ProductCreateOrConnectWithoutRestaurantInputSchema } from './ProductCreateOrConnectWithoutRestaurantInputSchema';
import { ProductCreateManyRestaurantInputEnvelopeSchema } from './ProductCreateManyRestaurantInputEnvelopeSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutRestaurantInputSchema),z.lazy(() => ProductCreateWithoutRestaurantInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => ProductUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => ProductCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProductCreateNestedManyWithoutRestaurantInputSchema;
