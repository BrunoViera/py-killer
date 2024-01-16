import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantUpdateWithoutPaymentMethodInputSchema } from './RestaurantUpdateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema';
import { RestaurantCreateWithoutPaymentMethodInputSchema } from './RestaurantCreateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedCreateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedCreateWithoutPaymentMethodInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutPaymentMethodInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutPaymentMethodInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutPaymentMethodInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutPaymentMethodInputSchema;
