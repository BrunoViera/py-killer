import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumBankNameWithAggregatesFilterSchema } from './EnumBankNameWithAggregatesFilterSchema';
import { BankNameSchema } from './BankNameSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const BankAccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BankAccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema),z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema),z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  bankName: z.union([ z.lazy(() => EnumBankNameWithAggregatesFilterSchema),z.lazy(() => BankNameSchema) ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default BankAccountScalarWhereWithAggregatesInputSchema;
