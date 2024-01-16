import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WorkSchedulesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WorkSchedulesAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WorkSchedulesAvgOrderByAggregateInputSchema;
