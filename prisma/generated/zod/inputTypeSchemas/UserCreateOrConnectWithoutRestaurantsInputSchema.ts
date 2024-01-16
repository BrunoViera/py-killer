import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutRestaurantsInputSchema } from './UserCreateWithoutRestaurantsInputSchema';
import { UserUncheckedCreateWithoutRestaurantsInputSchema } from './UserUncheckedCreateWithoutRestaurantsInputSchema';

export const UserCreateOrConnectWithoutRestaurantsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRestaurantsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRestaurantsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutRestaurantsInputSchema;
