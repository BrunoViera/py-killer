import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantCountOrderByAggregateInputSchema } from './RestaurantCountOrderByAggregateInputSchema';
import { RestaurantAvgOrderByAggregateInputSchema } from './RestaurantAvgOrderByAggregateInputSchema';
import { RestaurantMaxOrderByAggregateInputSchema } from './RestaurantMaxOrderByAggregateInputSchema';
import { RestaurantMinOrderByAggregateInputSchema } from './RestaurantMinOrderByAggregateInputSchema';
import { RestaurantSumOrderByAggregateInputSchema } from './RestaurantSumOrderByAggregateInputSchema';

export const RestaurantOrderByWithAggregationInputSchema: z.ZodType<Prisma.RestaurantOrderByWithAggregationInput> = z.object({
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
  _count: z.lazy(() => RestaurantCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RestaurantAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RestaurantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RestaurantMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RestaurantSumOrderByAggregateInputSchema).optional()
}).strict();

export default RestaurantOrderByWithAggregationInputSchema;
