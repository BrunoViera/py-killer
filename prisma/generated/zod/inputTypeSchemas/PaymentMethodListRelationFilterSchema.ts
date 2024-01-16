import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';

export const PaymentMethodListRelationFilterSchema: z.ZodType<Prisma.PaymentMethodListRelationFilter> = z.object({
  every: z.lazy(() => PaymentMethodWhereInputSchema).optional(),
  some: z.lazy(() => PaymentMethodWhereInputSchema).optional(),
  none: z.lazy(() => PaymentMethodWhereInputSchema).optional()
}).strict();

export default PaymentMethodListRelationFilterSchema;
