import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesWhereUniqueInputSchema } from './WorkSchedulesWhereUniqueInputSchema';
import { WorkSchedulesUpdateWithoutRestaurantInputSchema } from './WorkSchedulesUpdateWithoutRestaurantInputSchema';
import { WorkSchedulesUncheckedUpdateWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedUpdateWithoutRestaurantInputSchema';
import { WorkSchedulesCreateWithoutRestaurantInputSchema } from './WorkSchedulesCreateWithoutRestaurantInputSchema';
import { WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema';

export const WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => WorkSchedulesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkSchedulesUpdateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => WorkSchedulesCreateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default WorkSchedulesUpsertWithWhereUniqueWithoutRestaurantInputSchema;
