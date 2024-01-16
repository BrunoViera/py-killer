import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateWithoutAddressInputSchema } from './RestaurantUpdateWithoutAddressInputSchema';
import { RestaurantUncheckedUpdateWithoutAddressInputSchema } from './RestaurantUncheckedUpdateWithoutAddressInputSchema';

export const RestaurantUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.RestaurantUpdateWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutAddressInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutAddressInputSchema) ]),
}).strict();

export default RestaurantUpdateWithWhereUniqueWithoutAddressInputSchema;
