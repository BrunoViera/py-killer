import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutPaymentMethodInputSchema } from './RestaurantCreateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedCreateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedCreateWithoutPaymentMethodInputSchema';

export const RestaurantCreateOrConnectWithoutPaymentMethodInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutPaymentMethodInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutPaymentMethodInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutPaymentMethodInputSchema;
