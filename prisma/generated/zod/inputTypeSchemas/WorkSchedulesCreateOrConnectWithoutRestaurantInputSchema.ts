import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesWhereUniqueInputSchema } from './WorkSchedulesWhereUniqueInputSchema';
import { WorkSchedulesCreateWithoutRestaurantInputSchema } from './WorkSchedulesCreateWithoutRestaurantInputSchema';
import { WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema';

export const WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => WorkSchedulesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkSchedulesCreateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default WorkSchedulesCreateOrConnectWithoutRestaurantInputSchema;
