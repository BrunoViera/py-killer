import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BankAccountCountOrderByAggregateInputSchema } from './BankAccountCountOrderByAggregateInputSchema';
import { BankAccountAvgOrderByAggregateInputSchema } from './BankAccountAvgOrderByAggregateInputSchema';
import { BankAccountMaxOrderByAggregateInputSchema } from './BankAccountMaxOrderByAggregateInputSchema';
import { BankAccountMinOrderByAggregateInputSchema } from './BankAccountMinOrderByAggregateInputSchema';
import { BankAccountSumOrderByAggregateInputSchema } from './BankAccountSumOrderByAggregateInputSchema';

export const BankAccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.BankAccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BankAccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BankAccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BankAccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BankAccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BankAccountSumOrderByAggregateInputSchema).optional()
}).strict();

export default BankAccountOrderByWithAggregationInputSchema;
