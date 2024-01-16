import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutPaymentMethodInputSchema } from './RestaurantCreateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedCreateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedCreateWithoutPaymentMethodInputSchema';
import { RestaurantCreateOrConnectWithoutPaymentMethodInputSchema } from './RestaurantCreateOrConnectWithoutPaymentMethodInputSchema';
import { RestaurantUpsertWithoutPaymentMethodInputSchema } from './RestaurantUpsertWithoutPaymentMethodInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutPaymentMethodInputSchema } from './RestaurantUpdateToOneWithWhereWithoutPaymentMethodInputSchema';
import { RestaurantUpdateWithoutPaymentMethodInputSchema } from './RestaurantUpdateWithoutPaymentMethodInputSchema';
import { RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema } from './RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema';

export const RestaurantUpdateOneWithoutPaymentMethodNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneWithoutPaymentMethodNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutPaymentMethodInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutPaymentMethodInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutPaymentMethodInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUpdateWithoutPaymentMethodInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutPaymentMethodInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneWithoutPaymentMethodNestedInputSchema;
