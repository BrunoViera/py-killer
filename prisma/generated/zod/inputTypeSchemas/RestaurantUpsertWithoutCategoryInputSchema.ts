import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantUpdateWithoutCategoryInputSchema } from './RestaurantUpdateWithoutCategoryInputSchema';
import { RestaurantUncheckedUpdateWithoutCategoryInputSchema } from './RestaurantUncheckedUpdateWithoutCategoryInputSchema';
import { RestaurantCreateWithoutCategoryInputSchema } from './RestaurantCreateWithoutCategoryInputSchema';
import { RestaurantUncheckedCreateWithoutCategoryInputSchema } from './RestaurantUncheckedCreateWithoutCategoryInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutCategoryInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutCategoryInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutCategoryInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutCategoryInputSchema;
