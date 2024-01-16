import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithoutRestaurantInputSchema } from './CategoryUpdateWithoutRestaurantInputSchema';
import { CategoryUncheckedUpdateWithoutRestaurantInputSchema } from './CategoryUncheckedUpdateWithoutRestaurantInputSchema';
import { CategoryCreateWithoutRestaurantInputSchema } from './CategoryCreateWithoutRestaurantInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantInputSchema } from './CategoryUncheckedCreateWithoutRestaurantInputSchema';

export const CategoryUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutRestaurantInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default CategoryUpsertWithWhereUniqueWithoutRestaurantInputSchema;
