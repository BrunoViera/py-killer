import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PaymentMethodCountOrderByAggregateInputSchema } from './PaymentMethodCountOrderByAggregateInputSchema';
import { PaymentMethodAvgOrderByAggregateInputSchema } from './PaymentMethodAvgOrderByAggregateInputSchema';
import { PaymentMethodMaxOrderByAggregateInputSchema } from './PaymentMethodMaxOrderByAggregateInputSchema';
import { PaymentMethodMinOrderByAggregateInputSchema } from './PaymentMethodMinOrderByAggregateInputSchema';
import { PaymentMethodSumOrderByAggregateInputSchema } from './PaymentMethodSumOrderByAggregateInputSchema';

export const PaymentMethodOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentMethodOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PaymentMethodCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PaymentMethodAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMethodMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMethodMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PaymentMethodSumOrderByAggregateInputSchema).optional()
}).strict();

export default PaymentMethodOrderByWithAggregationInputSchema;
