import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutProductInputSchema } from './RestaurantUpdateWithoutProductInputSchema';
import { RestaurantUncheckedUpdateWithoutProductInputSchema } from './RestaurantUncheckedUpdateWithoutProductInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutProductInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutProductInputSchema;
