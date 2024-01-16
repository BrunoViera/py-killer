import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesScalarWhereInputSchema } from './WorkSchedulesScalarWhereInputSchema';
import { WorkSchedulesUpdateManyMutationInputSchema } from './WorkSchedulesUpdateManyMutationInputSchema';
import { WorkSchedulesUncheckedUpdateManyWithoutRestaurantInputSchema } from './WorkSchedulesUncheckedUpdateManyWithoutRestaurantInputSchema';

export const WorkSchedulesUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => WorkSchedulesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkSchedulesUpdateManyMutationInputSchema),z.lazy(() => WorkSchedulesUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default WorkSchedulesUpdateManyWithWhereWithoutRestaurantInputSchema;
