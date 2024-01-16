import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesWhereUniqueInputSchema } from './WorkSchedulesWhereUniqueInputSchema';
import { WorkSchedulesUpdateWithoutRestaurantInputSchema } from './WorkSchedulesUpdateWithoutRestaurantInputSchema';
import { WorkSchedulesUncheckedUpdateWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedUpdateWithoutRestaurantInputSchema';

export const WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => WorkSchedulesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkSchedulesUpdateWithoutRestaurantInputSchema),z.lazy(() => WorkSchedulesUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default WorkSchedulesUpdateWithWhereUniqueWithoutRestaurantInputSchema;
