import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutAddressInputSchema } from './RestaurantCreateWithoutAddressInputSchema';
import { RestaurantUncheckedCreateWithoutAddressInputSchema } from './RestaurantUncheckedCreateWithoutAddressInputSchema';
import { RestaurantCreateOrConnectWithoutAddressInputSchema } from './RestaurantCreateOrConnectWithoutAddressInputSchema';
import { RestaurantCreateManyAddressInputEnvelopeSchema } from './RestaurantCreateManyAddressInputEnvelopeSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantUncheckedCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateNestedManyWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutAddressInputSchema),z.lazy(() => RestaurantCreateWithoutAddressInputSchema).array(),z.lazy(() => RestaurantUncheckedCreateWithoutAddressInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestaurantCreateOrConnectWithoutAddressInputSchema),z.lazy(() => RestaurantCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestaurantCreateManyAddressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RestaurantUncheckedCreateNestedManyWithoutAddressInputSchema;
