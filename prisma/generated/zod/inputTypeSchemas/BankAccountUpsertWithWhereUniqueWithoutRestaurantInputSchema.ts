import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutRestaurantInputSchema } from './BankAccountUpdateWithoutRestaurantInputSchema';
import { BankAccountUncheckedUpdateWithoutRestaurantInputSchema } from './BankAccountUncheckedUpdateWithoutRestaurantInputSchema';
import { BankAccountCreateWithoutRestaurantInputSchema } from './BankAccountCreateWithoutRestaurantInputSchema';
import { BankAccountUncheckedCreateWithoutRestaurantInputSchema } from './BankAccountUncheckedCreateWithoutRestaurantInputSchema';

export const BankAccountUpsertWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountUpsertWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BankAccountUpdateWithoutRestaurantInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutRestaurantInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default BankAccountUpsertWithWhereUniqueWithoutRestaurantInputSchema;
