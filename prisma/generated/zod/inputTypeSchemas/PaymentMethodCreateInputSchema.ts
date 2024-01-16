import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutPaymentMethodInputSchema } from './RestaurantCreateNestedOneWithoutPaymentMethodInputSchema';

export const PaymentMethodCreateInputSchema: z.ZodType<Prisma.PaymentMethodCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  Restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutPaymentMethodInputSchema).optional()
}).strict();

export default PaymentMethodCreateInputSchema;
