import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const WorkSchedulesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkSchedulesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WorkSchedulesScalarWhereWithAggregatesInputSchema),z.lazy(() => WorkSchedulesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkSchedulesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkSchedulesScalarWhereWithAggregatesInputSchema),z.lazy(() => WorkSchedulesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  days: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  to: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default WorkSchedulesScalarWhereWithAggregatesInputSchema;
