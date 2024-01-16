import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';
import { PaymentMethodCreateWithoutRestaurantInputSchema } from './PaymentMethodCreateWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedCreateWithoutRestaurantInputSchema } from './PaymentMethodUncheckedCreateWithoutRestaurantInputSchema';

export const PaymentMethodCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => PaymentMethodWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default PaymentMethodCreateOrConnectWithoutRestaurantInputSchema;
