import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesCreateWithoutRestaurantInputSchema } from './WorkSchedulesCreateWithoutRestaurantInputSchema';
import { WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema';
import { WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema } from './WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema';
import { WorkSchedulesCreateManyRestaurantInputEnvelopeSchema } from './WorkSchedulesCreateManyRestaurantInputEnvelopeSchema';
import { WorkSchedulesWhereUniqueInputSchema } from './WorkSchedulesWhereUniqueInputSchema';

export const WorkSchedulesCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => WorkSchedulesCreateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesCreateWithoutRestaurantInputSchema).array(),z.lazy(() => WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkSchedulesCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkSchedulesWhereUniqueInputSchema),z.lazy(() => WorkSchedulesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkSchedulesCreateNestedManyWithoutRestaurantInputSchema;
