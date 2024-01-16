import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PaymentMethodCreateManyInputSchema: z.ZodType<Prisma.PaymentMethodCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  restaurantId: z.number().int().optional().nullable()
}).strict();

export default PaymentMethodCreateManyInputSchema;
