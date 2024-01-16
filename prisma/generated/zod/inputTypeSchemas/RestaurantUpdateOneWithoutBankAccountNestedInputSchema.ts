import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutBankAccountInputSchema } from './RestaurantCreateWithoutBankAccountInputSchema';
import { RestaurantUncheckedCreateWithoutBankAccountInputSchema } from './RestaurantUncheckedCreateWithoutBankAccountInputSchema';
import { RestaurantCreateOrConnectWithoutBankAccountInputSchema } from './RestaurantCreateOrConnectWithoutBankAccountInputSchema';
import { RestaurantUpsertWithoutBankAccountInputSchema } from './RestaurantUpsertWithoutBankAccountInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutBankAccountInputSchema } from './RestaurantUpdateToOneWithWhereWithoutBankAccountInputSchema';
import { RestaurantUpdateWithoutBankAccountInputSchema } from './RestaurantUpdateWithoutBankAccountInputSchema';
import { RestaurantUncheckedUpdateWithoutBankAccountInputSchema } from './RestaurantUncheckedUpdateWithoutBankAccountInputSchema';

export const RestaurantUpdateOneWithoutBankAccountNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneWithoutBankAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutBankAccountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutBankAccountInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutBankAccountInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutBankAccountInputSchema),z.lazy(() => RestaurantUpdateWithoutBankAccountInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutBankAccountInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneWithoutBankAccountNestedInputSchema;
