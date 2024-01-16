import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankNameSchema } from './BankNameSchema';

export const BankAccountCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountCreateWithoutRestaurantInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  bankName: z.lazy(() => BankNameSchema),
  accountNumber: z.string()
}).strict();

export default BankAccountCreateWithoutRestaurantInputSchema;
