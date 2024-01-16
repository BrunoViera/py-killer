import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantUpdateWithoutWorkSchedulesInputSchema } from './RestaurantUpdateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema';
import { RestaurantCreateWithoutWorkSchedulesInputSchema } from './RestaurantCreateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutWorkSchedulesInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutWorkSchedulesInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutWorkSchedulesInputSchema;
