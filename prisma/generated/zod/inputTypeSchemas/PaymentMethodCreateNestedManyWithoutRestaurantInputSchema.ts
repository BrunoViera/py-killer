import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodCreateWithoutRestaurantInputSchema } from './PaymentMethodCreateWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedCreateWithoutRestaurantInputSchema } from './PaymentMethodUncheckedCreateWithoutRestaurantInputSchema';
import { PaymentMethodCreateOrConnectWithoutRestaurantInputSchema } from './PaymentMethodCreateOrConnectWithoutRestaurantInputSchema';
import { PaymentMethodCreateManyRestaurantInputEnvelopeSchema } from './PaymentMethodCreateManyRestaurantInputEnvelopeSchema';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';

export const PaymentMethodCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.PaymentMethodCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodCreateWithoutRestaurantInputSchema).array(),z.lazy(() => PaymentMethodUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentMethodCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentMethodCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentMethodWhereUniqueInputSchema),z.lazy(() => PaymentMethodWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PaymentMethodCreateNestedManyWithoutRestaurantInputSchema;
