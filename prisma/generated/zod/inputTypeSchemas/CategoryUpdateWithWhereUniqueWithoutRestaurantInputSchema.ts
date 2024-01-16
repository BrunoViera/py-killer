import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithoutRestaurantInputSchema } from './CategoryUpdateWithoutRestaurantInputSchema';
import { CategoryUncheckedUpdateWithoutRestaurantInputSchema } from './CategoryUncheckedUpdateWithoutRestaurantInputSchema';

export const CategoryUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutRestaurantInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default CategoryUpdateWithWhereUniqueWithoutRestaurantInputSchema;
