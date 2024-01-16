import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankNameSchema } from './BankNameSchema';

export const BankAccountUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountUncheckedCreateWithoutRestaurantInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  bankName: z.lazy(() => BankNameSchema),
  accountNumber: z.string()
}).strict();

export default BankAccountUncheckedCreateWithoutRestaurantInputSchema;
