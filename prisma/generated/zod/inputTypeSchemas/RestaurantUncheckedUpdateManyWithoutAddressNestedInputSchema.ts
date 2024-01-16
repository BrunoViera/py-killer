import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutAddressInputSchema } from './RestaurantCreateWithoutAddressInputSchema';
import { RestaurantUncheckedCreateWithoutAddressInputSchema } from './RestaurantUncheckedCreateWithoutAddressInputSchema';
import { RestaurantCreateOrConnectWithoutAddressInputSchema } from './RestaurantCreateOrConnectWithoutAddressInputSchema';
import { RestaurantUpsertWithWhereUniqueWithoutAddressInputSchema } from './RestaurantUpsertWithWhereUniqueWithoutAddressInputSchema';
import { RestaurantCreateManyAddressInputEnvelopeSchema } from './RestaurantCreateManyAddressInputEnvelopeSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateWithWhereUniqueWithoutAddressInputSchema } from './RestaurantUpdateWithWhereUniqueWithoutAddressInputSchema';
import { RestaurantUpdateManyWithWhereWithoutAddressInputSchema } from './RestaurantUpdateManyWithWhereWithoutAddressInputSchema';
import { RestaurantScalarWhereInputSchema } from './RestaurantScalarWhereInputSchema';

export const RestaurantUncheckedUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.RestaurantUncheckedUpdateManyWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutAddressInputSchema),z.lazy(() => RestaurantCreateWithoutAddressInputSchema).array(),z.lazy(() => RestaurantUncheckedCreateWithoutAddressInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestaurantCreateOrConnectWithoutAddressInputSchema),z.lazy(() => RestaurantCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RestaurantUpsertWithWhereUniqueWithoutAddressInputSchema),z.lazy(() => RestaurantUpsertWithWhereUniqueWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestaurantCreateManyAddressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateWithWhereUniqueWithoutAddressInputSchema),z.lazy(() => RestaurantUpdateWithWhereUniqueWithoutAddressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RestaurantUpdateManyWithWhereWithoutAddressInputSchema),z.lazy(() => RestaurantUpdateManyWithWhereWithoutAddressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RestaurantScalarWhereInputSchema),z.lazy(() => RestaurantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RestaurantUncheckedUpdateManyWithoutAddressNestedInputSchema;
