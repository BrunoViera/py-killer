import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutOwnerInputSchema } from './RestaurantCreateWithoutOwnerInputSchema';
import { RestaurantUncheckedCreateWithoutOwnerInputSchema } from './RestaurantUncheckedCreateWithoutOwnerInputSchema';

export const RestaurantCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOwnerInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutOwnerInputSchema;
