import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestaurantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RestaurantMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  bromatology: z.lazy(() => SortOrderSchema).optional(),
  razonSocial: z.lazy(() => SortOrderSchema).optional(),
  hasDelivery: z.lazy(() => SortOrderSchema).optional(),
  hasPickUp: z.lazy(() => SortOrderSchema).optional(),
  mapCoordinates: z.lazy(() => SortOrderSchema).optional(),
  shippingCost: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RestaurantMaxOrderByAggregateInputSchema;
