import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const RestaurantScalarWhereInputSchema: z.ZodType<Prisma.RestaurantScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RestaurantScalarWhereInputSchema),z.lazy(() => RestaurantScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RestaurantScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RestaurantScalarWhereInputSchema),z.lazy(() => RestaurantScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bromatology: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  razonSocial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hasDelivery: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  hasPickUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  mapCoordinates: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shippingCost: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  addressId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default RestaurantScalarWhereInputSchema;
