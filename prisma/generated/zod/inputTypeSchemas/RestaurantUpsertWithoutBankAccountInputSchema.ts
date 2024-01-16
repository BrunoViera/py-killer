import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantUpdateWithoutBankAccountInputSchema } from './RestaurantUpdateWithoutBankAccountInputSchema';
import { RestaurantUncheckedUpdateWithoutBankAccountInputSchema } from './RestaurantUncheckedUpdateWithoutBankAccountInputSchema';
import { RestaurantCreateWithoutBankAccountInputSchema } from './RestaurantCreateWithoutBankAccountInputSchema';
import { RestaurantUncheckedCreateWithoutBankAccountInputSchema } from './RestaurantUncheckedCreateWithoutBankAccountInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantUpsertWithoutBankAccountInputSchema: z.ZodType<Prisma.RestaurantUpsertWithoutBankAccountInput> = z.object({
  update: z.union([ z.lazy(() => RestaurantUpdateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutBankAccountInputSchema) ]),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutBankAccountInputSchema) ]),
  where: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantUpsertWithoutBankAccountInputSchema;
