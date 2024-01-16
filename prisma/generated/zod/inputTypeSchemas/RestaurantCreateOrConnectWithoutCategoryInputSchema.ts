import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutCategoryInputSchema } from './RestaurantCreateWithoutCategoryInputSchema';
import { RestaurantUncheckedCreateWithoutCategoryInputSchema } from './RestaurantUncheckedCreateWithoutCategoryInputSchema';

export const RestaurantCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutCategoryInputSchema;
