import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PaymentMethodCreateWithoutRestaurantInputSchema } from './PaymentMethodCreateWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedCreateWithoutRestaurantInputSchema } from './PaymentMethodUncheckedCreateWithoutRestaurantInputSchema';
import { PaymentMethodCreateOrConnectWithoutRestaurantInputSchema } from './PaymentMethodCreateOrConnectWithoutRestaurantInputSchema';
import { PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { PaymentMethodCreateManyRestaurantInputEnvelopeSchema } from './PaymentMethodCreateManyRestaurantInputEnvelopeSchema';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';
import { PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { PaymentMethodUpdateManyWithWhereWithoutRestaurantInputSchema } from './PaymentMethodUpdateManyWithWhereWithoutRestaurantInputSchema';
import { PaymentMethodScalarWhereInputSchema } from './PaymentMethodScalarWhereInputSchema';

export const PaymentMethodUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.PaymentMethodUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodCreateWithoutRestaurantInputSchema).array(),z.lazy(() => PaymentMethodUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentMethodCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentMethodCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentMethodWhereUniqueInputSchema),z.lazy(() => PaymentMethodWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentMethodWhereUniqueInputSchema),z.lazy(() => PaymentMethodWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentMethodWhereUniqueInputSchema),z.lazy(() => PaymentMethodWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentMethodWhereUniqueInputSchema),z.lazy(() => PaymentMethodWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentMethodUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => PaymentMethodUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentMethodScalarWhereInputSchema),z.lazy(() => PaymentMethodScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PaymentMethodUpdateManyWithoutRestaurantNestedInputSchema;
