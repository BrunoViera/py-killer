import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutWorkSchedulesInputSchema } from './RestaurantCreateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema';

export const RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutWorkSchedulesInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema;
