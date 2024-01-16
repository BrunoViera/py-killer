import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankAccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BankAccountAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankAccountAvgOrderByAggregateInputSchema;
