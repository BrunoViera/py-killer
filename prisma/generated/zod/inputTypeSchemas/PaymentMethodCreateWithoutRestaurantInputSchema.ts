import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PaymentMethodCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodCreateWithoutRestaurantInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string()
}).strict();

export default PaymentMethodCreateWithoutRestaurantInputSchema;
