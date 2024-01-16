import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutRestaurantsInputSchema } from './UserCreateWithoutRestaurantsInputSchema';
import { UserUncheckedCreateWithoutRestaurantsInputSchema } from './UserUncheckedCreateWithoutRestaurantsInputSchema';
import { UserCreateOrConnectWithoutRestaurantsInputSchema } from './UserCreateOrConnectWithoutRestaurantsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutRestaurantsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRestaurantsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRestaurantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRestaurantsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutRestaurantsInputSchema;
