import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PaymentMethodCreateManyRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodCreateManyRestaurantInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string()
}).strict();

export default PaymentMethodCreateManyRestaurantInputSchema;
