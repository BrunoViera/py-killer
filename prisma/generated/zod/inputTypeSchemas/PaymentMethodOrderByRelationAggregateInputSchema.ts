import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentMethodOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PaymentMethodOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PaymentMethodOrderByRelationAggregateInputSchema;
