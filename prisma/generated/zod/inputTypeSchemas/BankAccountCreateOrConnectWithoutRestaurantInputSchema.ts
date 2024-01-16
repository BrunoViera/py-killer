import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountCreateWithoutRestaurantInputSchema } from './BankAccountCreateWithoutRestaurantInputSchema';
import { BankAccountUncheckedCreateWithoutRestaurantInputSchema } from './BankAccountUncheckedCreateWithoutRestaurantInputSchema';

export const BankAccountCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BankAccountCreateWithoutRestaurantInputSchema),z.lazy(() => BankAccountUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default BankAccountCreateOrConnectWithoutRestaurantInputSchema;
