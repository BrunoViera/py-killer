import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountCreateWithoutRestaurantInputSchema } from './BankAccountCreateWithoutRestaurantInputSchema';
import { BankAccountUncheckedCreateWithoutRestaurantInputSchema } from './BankAccountUncheckedCreateWithoutRestaurantInputSchema';
import { BankAccountCreateOrConnectWithoutRestaurantInputSchema } from './BankAccountCreateOrConnectWithoutRestaurantInputSchema';
import { BankAccountUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './BankAccountUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { BankAccountCreateManyRestaurantInputEnvelopeSchema } from './BankAccountCreateManyRestaurantInputEnvelopeSchema';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './BankAccountUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { BankAccountUpdateManyWithWhereWithoutRestaurantInputSchema } from './BankAccountUpdateManyWithWhereWithoutRestaurantInputSchema';
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema';

export const BankAccountUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => BankAccountCreateWithoutRestaurantInputSchema),z.lazy(() => BankAccountCreateWithoutRestaurantInputSchema).array(),z.lazy(() => BankAccountUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BankAccountCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => BankAccountCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => BankAccountUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BankAccountCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BankAccountWhereUniqueInputSchema),z.lazy(() => BankAccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => BankAccountUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BankAccountUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => BankAccountUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BankAccountScalarWhereInputSchema),z.lazy(() => BankAccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BankAccountUpdateManyWithoutRestaurantNestedInputSchema;
