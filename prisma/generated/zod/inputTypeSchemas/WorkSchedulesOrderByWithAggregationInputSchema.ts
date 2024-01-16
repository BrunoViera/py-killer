import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WorkSchedulesCountOrderByAggregateInputSchema } from './WorkSchedulesCountOrderByAggregateInputSchema';
import { WorkSchedulesAvgOrderByAggregateInputSchema } from './WorkSchedulesAvgOrderByAggregateInputSchema';
import { WorkSchedulesMaxOrderByAggregateInputSchema } from './WorkSchedulesMaxOrderByAggregateInputSchema';
import { WorkSchedulesMinOrderByAggregateInputSchema } from './WorkSchedulesMinOrderByAggregateInputSchema';
import { WorkSchedulesSumOrderByAggregateInputSchema } from './WorkSchedulesSumOrderByAggregateInputSchema';

export const WorkSchedulesOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkSchedulesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  days: z.lazy(() => SortOrderSchema).optional(),
  from: z.lazy(() => SortOrderSchema).optional(),
  to: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => WorkSchedulesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WorkSchedulesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkSchedulesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkSchedulesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WorkSchedulesSumOrderByAggregateInputSchema).optional()
}).strict();

export default WorkSchedulesOrderByWithAggregationInputSchema;
