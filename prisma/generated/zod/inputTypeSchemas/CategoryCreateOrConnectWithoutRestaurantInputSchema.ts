import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutRestaurantInputSchema } from './CategoryCreateWithoutRestaurantInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantInputSchema } from './CategoryUncheckedCreateWithoutRestaurantInputSchema';

export const CategoryCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default CategoryCreateOrConnectWithoutRestaurantInputSchema;
