import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankNameSchema } from './BankNameSchema';

export const NestedEnumBankNameFilterSchema: z.ZodType<Prisma.NestedEnumBankNameFilter> = z.object({
  equals: z.lazy(() => BankNameSchema).optional(),
  in: z.lazy(() => BankNameSchema).array().optional(),
  notIn: z.lazy(() => BankNameSchema).array().optional(),
  not: z.union([ z.lazy(() => BankNameSchema),z.lazy(() => NestedEnumBankNameFilterSchema) ]).optional(),
}).strict();

export default NestedEnumBankNameFilterSchema;
