import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodScalarWhereInputSchema } from './PaymentMethodScalarWhereInputSchema';
import { PaymentMethodUpdateManyMutationInputSchema } from './PaymentMethodUpdateManyMutationInputSchema';
import { PaymentMethodUncheckedUpdateManyWithoutRestaurantInputSchema } from './PaymentMethodUncheckedUpdateManyWithoutRestaurantInputSchema';

export const PaymentMethodUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => PaymentMethodScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentMethodUpdateManyMutationInputSchema),z.lazy(() => PaymentMethodUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default PaymentMethodUpdateManyWithWhereWithoutRestaurantInputSchema;
