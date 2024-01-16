import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutRestaurantsInputSchema } from './UserUpdateWithoutRestaurantsInputSchema';
import { UserUncheckedUpdateWithoutRestaurantsInputSchema } from './UserUncheckedUpdateWithoutRestaurantsInputSchema';

export const UserUpdateToOneWithWhereWithoutRestaurantsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRestaurantsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutRestaurantsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutRestaurantsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutRestaurantsInputSchema;
