import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { RestaurantNullableRelationFilterSchema } from './RestaurantNullableRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const PaymentMethodWhereUniqueInputSchema: z.ZodType<Prisma.PaymentMethodWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Restaurant: z.union([ z.lazy(() => RestaurantNullableRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional().nullable(),
}).strict());

export default PaymentMethodWhereUniqueInputSchema;
