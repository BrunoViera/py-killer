import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkSchedulesSumOrderByAggregateInputSchema: z.ZodType<Prisma.WorkSchedulesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorkSchedulesSumOrderByAggregateInputSchema;
