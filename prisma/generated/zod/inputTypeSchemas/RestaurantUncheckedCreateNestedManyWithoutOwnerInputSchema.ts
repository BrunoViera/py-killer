import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutOwnerInputSchema } from './RestaurantCreateWithoutOwnerInputSchema';
import { RestaurantUncheckedCreateWithoutOwnerInputSchema } from './RestaurantUncheckedCreateWithoutOwnerInputSchema';
import { RestaurantCreateOrConnectWithoutOwnerInputSchema } from './RestaurantCreateOrConnectWithoutOwnerInputSchema';
import { RestaurantCreateManyOwnerInputEnvelopeSchema } from './RestaurantCreateManyOwnerInputEnvelopeSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOwnerInputSchema),z.lazy(() => RestaurantCreateWithoutOwnerInputSchema).array(),z.lazy(() => RestaurantUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestaurantCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => RestaurantCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestaurantCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RestaurantUncheckedCreateNestedManyWithoutOwnerInputSchema;
