import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutPaymentMethodInputSchema } from './RestaurantCreateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedCreateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedCreateWithoutPaymentMethodInputSchema';
import { RestaurantCreateOrConnectWithoutPaymentMethodInputSchema } from './RestaurantCreateOrConnectWithoutPaymentMethodInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutPaymentMethodInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutPaymentMethodInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutPaymentMethodInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutPaymentMethodInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutPaymentMethodInputSchema;
