import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankNameSchema } from './BankNameSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBankNameFilterSchema } from './NestedEnumBankNameFilterSchema';

export const NestedEnumBankNameWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBankNameWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BankNameSchema).optional(),
  in: z.lazy(() => BankNameSchema).array().optional(),
  notIn: z.lazy(() => BankNameSchema).array().optional(),
  not: z.union([ z.lazy(() => BankNameSchema),z.lazy(() => NestedEnumBankNameWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBankNameFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBankNameFilterSchema).optional()
}).strict();

export default NestedEnumBankNameWithAggregatesFilterSchema;
