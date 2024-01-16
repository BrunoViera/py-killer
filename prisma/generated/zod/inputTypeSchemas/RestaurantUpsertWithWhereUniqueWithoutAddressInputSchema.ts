import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateWithoutAddressInputSchema } from './RestaurantUpdateWithoutAddressInputSchema';
import { RestaurantUncheckedUpdateWithoutAddressInputSchema } from './RestaurantUncheckedUpdateWithoutAddressInputSchema';
import { RestaurantCreateWithoutAddressInputSchema } from './RestaurantCreateWithoutAddressInputSchema';
import { RestaurantUncheckedCreateWithoutAddressInputSchema } from './RestaurantUncheckedCreateWithoutAddressInputSchema';

export const RestaurantUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.RestaurantUpsertWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutAddressInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutAddressInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutAddressInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default RestaurantUpsertWithWhereUniqueWithoutAddressInputSchema;
