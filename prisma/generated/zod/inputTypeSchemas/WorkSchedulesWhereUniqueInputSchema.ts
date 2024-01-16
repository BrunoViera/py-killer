import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesWhereInputSchema } from './WorkSchedulesWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { RestaurantNullableRelationFilterSchema } from './RestaurantNullableRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const WorkSchedulesWhereUniqueInputSchema: z.ZodType<Prisma.WorkSchedulesWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => WorkSchedulesWhereInputSchema),z.lazy(() => WorkSchedulesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkSchedulesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkSchedulesWhereInputSchema),z.lazy(() => WorkSchedulesWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  days: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  from: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  to: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Restaurant: z.union([ z.lazy(() => RestaurantNullableRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional().nullable(),
}).strict());

export default WorkSchedulesWhereUniqueInputSchema;
