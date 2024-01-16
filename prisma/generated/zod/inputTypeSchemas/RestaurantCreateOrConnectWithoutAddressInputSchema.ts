import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutAddressInputSchema } from './RestaurantCreateWithoutAddressInputSchema';
import { RestaurantUncheckedCreateWithoutAddressInputSchema } from './RestaurantUncheckedCreateWithoutAddressInputSchema';

export const RestaurantCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutAddressInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutAddressInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutAddressInputSchema;
