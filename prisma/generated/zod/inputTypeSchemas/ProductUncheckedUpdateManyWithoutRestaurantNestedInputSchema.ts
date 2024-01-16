import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductCreateWithoutRestaurantInputSchema } from './ProductCreateWithoutRestaurantInputSchema';
import { ProductUncheckedCreateWithoutRestaurantInputSchema } from './ProductUncheckedCreateWithoutRestaurantInputSchema';
import { ProductCreateOrConnectWithoutRestaurantInputSchema } from './ProductCreateOrConnectWithoutRestaurantInputSchema';
import { ProductUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './ProductUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { ProductCreateManyRestaurantInputEnvelopeSchema } from './ProductCreateManyRestaurantInputEnvelopeSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './ProductUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { ProductUpdateManyWithWhereWithoutRestaurantInputSchema } from './ProductUpdateManyWithWhereWithoutRestaurantInputSchema';
import { ProductScalarWhereInputSchema } from './ProductScalarWhereInputSchema';

export const ProductUncheckedUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutRestaurantInputSchema),z.lazy(() => ProductCreateWithoutRestaurantInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => ProductUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => ProductCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProductUncheckedUpdateManyWithoutRestaurantNestedInputSchema;
