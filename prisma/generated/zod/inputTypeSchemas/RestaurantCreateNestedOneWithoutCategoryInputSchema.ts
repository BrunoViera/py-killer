import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutCategoryInputSchema } from './RestaurantCreateWithoutCategoryInputSchema';
import { RestaurantUncheckedCreateWithoutCategoryInputSchema } from './RestaurantUncheckedCreateWithoutCategoryInputSchema';
import { RestaurantCreateOrConnectWithoutCategoryInputSchema } from './RestaurantCreateOrConnectWithoutCategoryInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutCategoryInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutCategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutCategoryInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutCategoryInputSchema;
