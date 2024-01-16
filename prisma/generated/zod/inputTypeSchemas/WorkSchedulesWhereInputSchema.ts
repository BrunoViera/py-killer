import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { RestaurantNullableRelationFilterSchema } from './RestaurantNullableRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const WorkSchedulesWhereInputSchema: z.ZodType<Prisma.WorkSchedulesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkSchedulesWhereInputSchema),z.lazy(() => WorkSchedulesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkSchedulesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkSchedulesWhereInputSchema),z.lazy(() => WorkSchedulesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  days: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  to: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Restaurant: z.union([ z.lazy(() => RestaurantNullableRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional().nullable(),
}).strict();

export default WorkSchedulesWhereInputSchema;
