import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankNameSchema } from './BankNameSchema';
import { RestaurantCreateNestedOneWithoutBankAccountInputSchema } from './RestaurantCreateNestedOneWithoutBankAccountInputSchema';

export const BankAccountCreateInputSchema: z.ZodType<Prisma.BankAccountCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  bankName: z.lazy(() => BankNameSchema),
  accountNumber: z.string(),
  Restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutBankAccountInputSchema).optional()
}).strict();

export default BankAccountCreateInputSchema;
