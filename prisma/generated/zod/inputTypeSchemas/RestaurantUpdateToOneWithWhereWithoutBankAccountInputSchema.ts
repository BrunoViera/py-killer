import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantUpdateWithoutBankAccountInputSchema } from './RestaurantUpdateWithoutBankAccountInputSchema';
import { RestaurantUncheckedUpdateWithoutBankAccountInputSchema } from './RestaurantUncheckedUpdateWithoutBankAccountInputSchema';

export const RestaurantUpdateToOneWithWhereWithoutBankAccountInputSchema: z.ZodType<Prisma.RestaurantUpdateToOneWithWhereWithoutBankAccountInput> = z.object({
  where: z.lazy(() => RestaurantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RestaurantUpdateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutBankAccountInputSchema) ]),
}).strict();

export default RestaurantUpdateToOneWithWhereWithoutBankAccountInputSchema;
