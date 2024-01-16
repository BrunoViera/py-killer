import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { AddressOrderByWithRelationInputSchema } from './AddressOrderByWithRelationInputSchema';
import { CategoryOrderByRelationAggregateInputSchema } from './CategoryOrderByRelationAggregateInputSchema';
import { ProductOrderByRelationAggregateInputSchema } from './ProductOrderByRelationAggregateInputSchema';
import { PaymentMethodOrderByRelationAggregateInputSchema } from './PaymentMethodOrderByRelationAggregateInputSchema';
import { BankAccountOrderByRelationAggregateInputSchema } from './BankAccountOrderByRelationAggregateInputSchema';
import { WorkSchedulesOrderByRelationAggregateInputSchema } from './WorkSchedulesOrderByRelationAggregateInputSchema';

export const RestaurantOrderByWithRelationInputSchema: z.ZodType<Prisma.RestaurantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bromatology: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  razonSocial: z.lazy(() => SortOrderSchema).optional(),
  hasDelivery: z.lazy(() => SortOrderSchema).optional(),
  hasPickUp: z.lazy(() => SortOrderSchema).optional(),
  mapCoordinates: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  shippingCost: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
  Category: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  Product: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional(),
  PaymentMethod: z.lazy(() => PaymentMethodOrderByRelationAggregateInputSchema).optional(),
  BankAccount: z.lazy(() => BankAccountOrderByRelationAggregateInputSchema).optional(),
  WorkSchedules: z.lazy(() => WorkSchedulesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RestaurantOrderByWithRelationInputSchema;
