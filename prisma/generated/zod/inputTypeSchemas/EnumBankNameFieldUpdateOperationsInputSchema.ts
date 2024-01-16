import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankNameSchema } from './BankNameSchema';

export const EnumBankNameFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBankNameFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BankNameSchema).optional()
}).strict();

export default EnumBankNameFieldUpdateOperationsInputSchema;
