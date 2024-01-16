import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BankAccountScalarWhereInputSchema } from './BankAccountScalarWhereInputSchema';
import { BankAccountUpdateManyMutationInputSchema } from './BankAccountUpdateManyMutationInputSchema';
import { BankAccountUncheckedUpdateManyWithoutRestaurantInputSchema } from './BankAccountUncheckedUpdateManyWithoutRestaurantInputSchema';

export const BankAccountUpdateManyWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.BankAccountUpdateManyWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => BankAccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BankAccountUpdateManyMutationInputSchema),z.lazy(() => BankAccountUncheckedUpdateManyWithoutRestaurantInputSchema) ]),
}).strict();

export default BankAccountUpdateManyWithWhereWithoutRestaurantInputSchema;
