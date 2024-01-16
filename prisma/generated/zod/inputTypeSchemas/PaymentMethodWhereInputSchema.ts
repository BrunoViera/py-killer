import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { RestaurantNullableRelationFilterSchema } from './RestaurantNullableRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const PaymentMethodWhereInputSchema: z.ZodType<Prisma.PaymentMethodWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Restaurant: z.union([ z.lazy(() => RestaurantNullableRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional().nullable(),
}).strict();

export default PaymentMethodWhereInputSchema;
