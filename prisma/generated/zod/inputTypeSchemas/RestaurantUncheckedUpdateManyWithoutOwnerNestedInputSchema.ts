import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutOwnerInputSchema } from './RestaurantCreateWithoutOwnerInputSchema';
import { RestaurantUncheckedCreateWithoutOwnerInputSchema } from './RestaurantUncheckedCreateWithoutOwnerInputSchema';
import { RestaurantCreateOrConnectWithoutOwnerInputSchema } from './RestaurantCreateOrConnectWithoutOwnerInputSchema';
import { RestaurantUpsertWithWhereUniqueWithoutOwnerInputSchema } from './RestaurantUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { RestaurantCreateManyOwnerInputEnvelopeSchema } from './RestaurantCreateManyOwnerInputEnvelopeSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateWithWhereUniqueWithoutOwnerInputSchema } from './RestaurantUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { RestaurantUpdateManyWithWhereWithoutOwnerInputSchema } from './RestaurantUpdateManyWithWhereWithoutOwnerInputSchema';
import { RestaurantScalarWhereInputSchema } from './RestaurantScalarWhereInputSchema';

export const RestaurantUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.RestaurantUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutOwnerInputSchema),z.lazy(() => RestaurantCreateWithoutOwnerInputSchema).array(),z.lazy(() => RestaurantUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RestaurantCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => RestaurantCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RestaurantUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => RestaurantUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RestaurantCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RestaurantWhereUniqueInputSchema),z.lazy(() => RestaurantWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => RestaurantUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RestaurantUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => RestaurantUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RestaurantScalarWhereInputSchema),z.lazy(() => RestaurantScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RestaurantUncheckedUpdateManyWithoutOwnerNestedInputSchema;
