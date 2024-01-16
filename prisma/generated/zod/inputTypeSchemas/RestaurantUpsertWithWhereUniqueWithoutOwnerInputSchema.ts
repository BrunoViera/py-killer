import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateWithoutOwnerInputSchema } from './RestaurantUpdateWithoutOwnerInputSchema';
import { RestaurantUncheckedUpdateWithoutOwnerInputSchema } from './RestaurantUncheckedUpdateWithoutOwnerInputSchema';
import { RestaurantCreateWithoutOwnerInputSchema } from './RestaurantCreateWithoutOwnerInputSchema';
import { RestaurantUncheckedCreateWithoutOwnerInputSchema } from './RestaurantUncheckedCreateWithoutOwnerInputSchema';

export const RestaurantUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.RestaurantUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutOwnerInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOwnerInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default RestaurantUpsertWithWhereUniqueWithoutOwnerInputSchema;
