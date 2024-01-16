import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutRestaurantsInputSchema } from './UserCreateWithoutRestaurantsInputSchema';
import { UserUncheckedCreateWithoutRestaurantsInputSchema } from './UserUncheckedCreateWithoutRestaurantsInputSchema';
import { UserCreateOrConnectWithoutRestaurantsInputSchema } from './UserCreateOrConnectWithoutRestaurantsInputSchema';
import { UserUpsertWithoutRestaurantsInputSchema } from './UserUpsertWithoutRestaurantsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutRestaurantsInputSchema } from './UserUpdateToOneWithWhereWithoutRestaurantsInputSchema';
import { UserUpdateWithoutRestaurantsInputSchema } from './UserUpdateWithoutRestaurantsInputSchema';
import { UserUncheckedUpdateWithoutRestaurantsInputSchema } from './UserUncheckedUpdateWithoutRestaurantsInputSchema';

export const UserUpdateOneRequiredWithoutRestaurantsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRestaurantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedCreateWithoutRestaurantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRestaurantsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRestaurantsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutRestaurantsInputSchema),z.lazy(() => UserUpdateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRestaurantsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutRestaurantsNestedInputSchema;
