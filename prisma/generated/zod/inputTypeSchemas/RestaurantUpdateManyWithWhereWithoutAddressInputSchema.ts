import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantScalarWhereInputSchema } from './RestaurantScalarWhereInputSchema';
import { RestaurantUpdateManyMutationInputSchema } from './RestaurantUpdateManyMutationInputSchema';
import { RestaurantUncheckedUpdateManyWithoutAddressInputSchema } from './RestaurantUncheckedUpdateManyWithoutAddressInputSchema';

export const RestaurantUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.RestaurantUpdateManyWithWhereWithoutAddressInput> = z.object({
  where: z.lazy(() => RestaurantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RestaurantUpdateManyMutationInputSchema),z.lazy(() => RestaurantUncheckedUpdateManyWithoutAddressInputSchema) ]),
}).strict();

export default RestaurantUpdateManyWithWhereWithoutAddressInputSchema;
