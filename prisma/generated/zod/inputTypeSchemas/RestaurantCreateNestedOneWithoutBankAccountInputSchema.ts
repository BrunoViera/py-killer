import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutBankAccountInputSchema } from './RestaurantCreateWithoutBankAccountInputSchema';
import { RestaurantUncheckedCreateWithoutBankAccountInputSchema } from './RestaurantUncheckedCreateWithoutBankAccountInputSchema';
import { RestaurantCreateOrConnectWithoutBankAccountInputSchema } from './RestaurantCreateOrConnectWithoutBankAccountInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';

export const RestaurantCreateNestedOneWithoutBankAccountInputSchema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutBankAccountInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutBankAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutBankAccountInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional()
}).strict();

export default RestaurantCreateNestedOneWithoutBankAccountInputSchema;
