import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutRestaurantsInputSchema } from './UserUpdateWithoutRestaurantsInputSchema';
import { UserUncheckedUpdateWithoutRestaurantsInputSchema } from './UserUncheckedUpdateWithoutRestaurantsInputSchema';
import { UserCreateWithoutRestaurantsInputSchema } from './UserCreateWithoutRestaurantsInputSchema';
import { UserUncheckedCreateWithoutRestaurantsInputSchema } from './UserUncheckedCreateWithoutRestaurantsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutRestaurantsInputSchema: z.ZodType<Prisma.UserUpsertWithoutRestaurantsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRestaurantsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRestaurantsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutRestaurantsInputSchema;
