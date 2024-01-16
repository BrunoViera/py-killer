import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountCreateWithoutRestaurantInputSchema } from './BankAccountCreateWithoutRestaurantInputSchema';
import { BankAccountUncheckedCreateWithoutRestaurantInputSchema } from './BankAccountUncheckedCreateWithoutRestaurantInputSchema';
import { BankAccountCreateOrConnectWithoutRestaurantInputSchema } from './BankAccountCreateOrConnectWithoutRestaurantInputSchema';
import { BankAccountCreateManyRestaurantInputEnvelopeSchema } from './BankAccountCreateManyRestaurantInputEnvelopeSchema';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';

export const BankAccountUncheckedCreateNestedManyWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountUncheckedCreateNestedManyWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => BankAccountCreateWithoutRestaurantInputSchema),z.lazy(() => BankAccountCreateWithoutRestaurantInputSchema).array(),z.lazy(() => BankAccountUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankAccountCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => BankAccountCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BankAccountCreateManyRestaurantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BankAccountUncheckedCreateNestedManyWithoutRestaurantInputSchema;
