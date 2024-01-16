import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';
import { PaymentMethodUpdateWithoutRestaurantInputSchema } from './PaymentMethodUpdateWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedUpdateWithoutRestaurantInputSchema } from './PaymentMethodUncheckedUpdateWithoutRestaurantInputSchema';
import { PaymentMethodCreateWithoutRestaurantInputSchema } from './PaymentMethodCreateWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedCreateWithoutRestaurantInputSchema } from './PaymentMethodUncheckedCreateWithoutRestaurantInputSchema';

export const PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => PaymentMethodWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentMethodUpdateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInputSchema;
