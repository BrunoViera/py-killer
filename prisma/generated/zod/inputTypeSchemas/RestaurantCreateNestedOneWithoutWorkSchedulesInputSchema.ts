import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutWorkSchedulesInputSchema } from './RestaurantCreateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema';
import { RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema } from './RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutWorkSchedulesInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutWorkSchedulesInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutWorkSchedulesInputSchema;
