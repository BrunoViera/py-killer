import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryCreateWithoutRestaurantInputSchema } from './CategoryCreateWithoutRestaurantInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantInputSchema } from './CategoryUncheckedCreateWithoutRestaurantInputSchema';
import { CategoryCreateOrConnectWithoutRestaurantInputSchema } from './CategoryCreateOrConnectWithoutRestaurantInputSchema';
import { CategoryCreateManyRestaurantInputEnvelopeSchema } from './CategoryCreateManyRestaurantInputEnvelopeSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantInputSchema),z.lazy(() => CategoryCreateWithoutRestaurantInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema;
