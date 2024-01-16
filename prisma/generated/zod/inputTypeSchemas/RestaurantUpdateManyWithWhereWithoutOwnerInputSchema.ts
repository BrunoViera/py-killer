import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantScalarWhereInputSchema } from './RestaurantScalarWhereInputSchema';
import { RestaurantUpdateManyMutationInputSchema } from './RestaurantUpdateManyMutationInputSchema';
import { RestaurantUncheckedUpdateManyWithoutOwnerInputSchema } from './RestaurantUncheckedUpdateManyWithoutOwnerInputSchema';

export const RestaurantUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.RestaurantUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => RestaurantScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RestaurantUpdateManyMutationInputSchema),z.lazy(() => RestaurantUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export default RestaurantUpdateManyWithWhereWithoutOwnerInputSchema;
