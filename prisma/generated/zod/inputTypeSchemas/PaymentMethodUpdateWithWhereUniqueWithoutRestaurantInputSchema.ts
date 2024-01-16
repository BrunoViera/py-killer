import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';
import { PaymentMethodUpdateWithoutRestaurantInputSchema } from './PaymentMethodUpdateWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedUpdateWithoutRestaurantInputSchema } from './PaymentMethodUncheckedUpdateWithoutRestaurantInputSchema';

export const PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => PaymentMethodWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentMethodUpdateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInputSchema;
