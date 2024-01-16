import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountCreateManyRestaurantInputSchema } from './BankAccountCreateManyRestaurantInputSchema';

export const BankAccountCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.BankAccountCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BankAccountCreateManyRestaurantInputSchema),z.lazy(() => BankAccountCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BankAccountCreateManyRestaurantInputEnvelopeSchema;
