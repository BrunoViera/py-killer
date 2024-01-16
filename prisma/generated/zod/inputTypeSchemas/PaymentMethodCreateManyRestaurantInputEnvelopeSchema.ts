import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodCreateManyRestaurantInputSchema } from './PaymentMethodCreateManyRestaurantInputSchema';

export const PaymentMethodCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.PaymentMethodCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PaymentMethodCreateManyRestaurantInputSchema),z.lazy(() => PaymentMethodCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PaymentMethodCreateManyRestaurantInputEnvelopeSchema;
