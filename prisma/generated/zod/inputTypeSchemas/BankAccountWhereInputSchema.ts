import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumBankNameFilterSchema } from './EnumBankNameFilterSchema';
import { BankNameSchema } from './BankNameSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { RestaurantNullableRelationFilterSchema } from './RestaurantNullableRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const BankAccountWhereInputSchema: z.ZodType<Prisma.BankAccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BankAccountWhereInputSchema),z.lazy(() => BankAccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankAccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankAccountWhereInputSchema),z.lazy(() => BankAccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  bankName: z.union([ z.lazy(() => EnumBankNameFilterSchema),z.lazy(() => BankNameSchema) ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  Restaurant: z.union([ z.lazy(() => RestaurantNullableRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional().nullable(),
}).strict();

export default BankAccountWhereInputSchema;
