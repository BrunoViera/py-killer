import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutProductInputSchema } from './RestaurantCreateWithoutProductInputSchema';
import { RestaurantUncheckedCreateWithoutProductInputSchema } from './RestaurantUncheckedCreateWithoutProductInputSchema';

export const RestaurantCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutProductInputSchema;
