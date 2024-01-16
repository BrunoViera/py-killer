import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const WorkSchedulesScalarWhereInputSchema: z.ZodType<Prisma.WorkSchedulesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkSchedulesScalarWhereInputSchema),z.lazy(() => WorkSchedulesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkSchedulesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkSchedulesScalarWhereInputSchema),z.lazy(() => WorkSchedulesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  days: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  to: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default WorkSchedulesScalarWhereInputSchema;
