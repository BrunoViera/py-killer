import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryScalarWhereInputSchema } from './CategoryScalarWhereInputSchema';
import { CategoryUpdateManyMutationInputSchema } from './CategoryUpdateManyMutationInputSchema';
import { CategoryUncheckedUpdateManyWithoutRestaurantInputSchema } from './CategoryUncheckedUpdateManyWithoutRestaurantInputSchema';

export const CategoryUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default CategoryUpdateManyWithWhereWithoutRestaurantInputSchema;
