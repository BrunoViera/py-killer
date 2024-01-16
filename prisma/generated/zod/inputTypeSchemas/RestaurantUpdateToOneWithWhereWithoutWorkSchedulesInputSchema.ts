import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutWorkSchedulesInputSchema } from './RestaurantUpdateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutWorkSchedulesInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutWorkSchedulesInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutWorkSchedulesInputSchema;
