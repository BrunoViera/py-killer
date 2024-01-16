import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutCategoryInputSchema } from './RestaurantUpdateWithoutCategoryInputSchema';
import { RestaurantUncheckedUpdateWithoutCategoryInputSchema } from './RestaurantUncheckedUpdateWithoutCategoryInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutCategoryInputSchema;
