import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesCreateWithoutRestaurantInputSchema } from './WorkSchedulesCreateWithoutRestaurantInputSchema';
import { WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema';
import { WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema } from './WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema';
import { WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { WorkSchedulesCreateManyRestaurantInputEnvelopeSchema } from './WorkSchedulesCreateManyRestaurantInputEnvelopeSchema';
import { WorkSchedulesWhereUniqueInputSchema } from './WorkSchedulesWhereUniqueInputSchema';
import { WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { WorkSchedulesUpdateManyWithWhereWithoutRestaurantInputSchema } from './WorkSchedulesUpdateManyWithWhereWithoutRestaurantInputSchema';
import { WorkSchedulesScalarWhereInputSchema } from './WorkSchedulesScalarWhereInputSchema';

export const WorkSchedulesUncheckedUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.WorkSchedulesUncheckedUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkSchedulesCreateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesCreateWithoutRestaurantInputSchema).array(),z.lazy(() => WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkSchedulesCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkSchedulesWhereUniqueInputSchema),z.lazy(() => WorkSchedulesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkSchedulesWhereUniqueInputSchema),z.lazy(() => WorkSchedulesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkSchedulesWhereUniqueInputSchema),z.lazy(() => WorkSchedulesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkSchedulesWhereUniqueInputSchema),z.lazy(() => WorkSchedulesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkSchedulesUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkSchedulesScalarWhereInputSchema),z.lazy(() => WorkSchedulesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkSchedulesUncheckedUpdateManyWithoutRestaurantNestedInputSchema;
