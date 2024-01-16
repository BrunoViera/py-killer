import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountWhereUniqueInputSchema } from './BankAccountWhereUniqueInputSchema';
import { BankAccountUpdateWithoutRestaurantInputSchema } from './BankAccountUpdateWithoutRestaurantInputSchema';
import { BankAccountUncheckedUpdateWithoutRestaurantInputSchema } from './BankAccountUncheckedUpdateWithoutRestaurantInputSchema';

export const BankAccountUpdateWithWhereUniqueWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountUpdateWithWhereUniqueWithoutRestaurantInput> = z.object({
  where: z.lazy(() => BankAccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateWithoutRestaurantInputSchema),z.lazy(() => BankAccountUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default BankAccountUpdateWithWhereUniqueWithoutRestaurantInputSchema;
