import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { AddressRelationFilterSchema } from './AddressRelationFilterSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { CategoryListRelationFilterSchema } from './CategoryListRelationFilterSchema';
import { ProductListRelationFilterSchema } from './ProductListRelationFilterSchema';
import { PaymentMethodListRelationFilterSchema } from './PaymentMethodListRelationFilterSchema';
import { BankAccountListRelationFilterSchema } from './BankAccountListRelationFilterSchema';
import { WorkSchedulesListRelationFilterSchema } from './WorkSchedulesListRelationFilterSchema';

export const RestaurantWhereUniqueInputSchema: z.ZodType<Prisma.RestaurantWhereUniqueInput> = z.union([
  z.object({
    id: z.number(),
    name: z.string()
  }),
  z.object({
    id: z.number(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => RestaurantWhereInputSchema),z.lazy(() => RestaurantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RestaurantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RestaurantWhereInputSchema),z.lazy(() => RestaurantWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bromatology: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  razonSocial: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hasDelivery: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  hasPickUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  mapCoordinates: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  shippingCost: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  addressId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  owner: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => AddressRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  Category: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  Product: z.lazy(() => ProductListRelationFilterSchema).optional(),
  PaymentMethod: z.lazy(() => PaymentMethodListRelationFilterSchema).optional(),
  BankAccount: z.lazy(() => BankAccountListRelationFilterSchema).optional(),
  WorkSchedules: z.lazy(() => WorkSchedulesListRelationFilterSchema).optional()
}).strict());

export default RestaurantWhereUniqueInputSchema;
