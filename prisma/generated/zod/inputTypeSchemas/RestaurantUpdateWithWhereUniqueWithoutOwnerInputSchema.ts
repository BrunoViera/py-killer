import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateWithoutOwnerInputSchema } from './RestaurantUpdateWithoutOwnerInputSchema';
import { RestaurantUncheckedUpdateWithoutOwnerInputSchema } from './RestaurantUncheckedUpdateWithoutOwnerInputSchema';

export const RestaurantUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.RestaurantUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutOwnerInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export default RestaurantUpdateWithWhereUniqueWithoutOwnerInputSchema;
