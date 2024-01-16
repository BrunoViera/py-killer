import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutProductInputSchema } from './RestaurantCreateWithoutProductInputSchema';
import { RestaurantUncheckedCreateWithoutProductInputSchema } from './RestaurantUncheckedCreateWithoutProductInputSchema';
import { RestaurantCreateOrConnectWithoutProductInputSchema } from './RestaurantCreateOrConnectWithoutProductInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutProductInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutProductInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutProductInputSchema;
