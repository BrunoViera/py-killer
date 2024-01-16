import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantCreateWithoutBankAccountInputSchema } from './RestaurantCreateWithoutBankAccountInputSchema';
import { RestaurantUncheckedCreateWithoutBankAccountInputSchema } from './RestaurantUncheckedCreateWithoutBankAccountInputSchema';

export const RestaurantCreateOrConnectWithoutBankAccountInputSchema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutBankAccountInput> = z.object({
  where: z.lazy(() => RestaurantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RestaurantCreateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutBankAccountInputSchema) ]),
}).strict();

export default RestaurantCreateOrConnectWithoutBankAccountInputSchema;
