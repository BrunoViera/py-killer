import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutPaymentMethodInputSchema } from './RestaurantUpdateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutPaymentMethodInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutPaymentMethodInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutPaymentMethodInputSchema;
