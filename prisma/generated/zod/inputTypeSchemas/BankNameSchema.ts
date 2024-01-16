import { z } from 'zod';

export const BankNameSchema = z.enum(['Itau','Brou','Santander','ScotiaBank','HSBC']);

export type BankNameType = `${z.infer<typeof BankNameSchema>}`

export default BankNameSchema;
