import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantUpdateWithoutProductInputSchema } from './RestaurantUpdateWithoutProductInputSchema';
import { RestaurantUncheckedUpdateWithoutProductInputSchema } from './RestaurantUncheckedUpdateWithoutProductInputSchema';
import { RestaurantCreateWithoutProductInputSchema } from './RestaurantCreateWithoutProductInputSchema';
import { RestaurantUncheckedCreateWithoutProductInputSchema } from './RestaurantUncheckedCreateWithoutProductInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutProductInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutProductInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutProductInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutProductInputSchema;
