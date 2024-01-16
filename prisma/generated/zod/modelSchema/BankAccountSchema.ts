import { z } from 'zod';
import { BankNameSchema } from '../inputTypeSchemas/BankNameSchema'

/////////////////////////////////////////
// BANK ACCOUNT SCHEMA
/////////////////////////////////////////

export const BankAccountSchema = z.object({
  bankName: BankNameSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  accountNumber: z.string(),
  restaurantId: z.number().int().nullable(),
})

export type BankAccount = z.infer<typeof BankAccountSchema>

export default BankAccountSchema;
