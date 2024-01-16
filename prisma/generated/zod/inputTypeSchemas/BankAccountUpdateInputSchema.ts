import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { BankNameSchema } from './BankNameSchema';
import { EnumBankNameFieldUpdateOperationsInputSchema } from './EnumBankNameFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RestaurantUpdateOneWithoutBankAccountNestedInputSchema } from './RestaurantUpdateOneWithoutBankAccountNestedInputSchema';

export const BankAccountUpdateInputSchema: z.ZodType<Prisma.BankAccountUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  bankName: z.union([ z.lazy(() => BankNameSchema),z.lazy(() => EnumBankNameFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Restaurant: z.lazy(() => RestaurantUpdateOneWithoutBankAccountNestedInputSchema).optional()
}).strict();

export default BankAccountUpdateInputSchema;
