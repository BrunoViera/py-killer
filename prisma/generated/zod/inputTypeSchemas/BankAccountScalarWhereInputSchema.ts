import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumBankNameFilterSchema } from './EnumBankNameFilterSchema';
import { BankNameSchema } from './BankNameSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';

export const BankAccountScalarWhereInputSchema: z.ZodType<Prisma.BankAccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BankAccountScalarWhereInputSchema),z.lazy(() => BankAccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankAccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankAccountScalarWhereInputSchema),z.lazy(() => BankAccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  bankName: z.union([ z.lazy(() => EnumBankNameFilterSchema),z.lazy(() => BankNameSchema) ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default BankAccountScalarWhereInputSchema;
