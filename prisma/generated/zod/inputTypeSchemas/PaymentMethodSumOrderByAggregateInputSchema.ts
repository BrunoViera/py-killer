import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentMethodSumOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentMethodSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PaymentMethodSumOrderByAggregateInputSchema;
