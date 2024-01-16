import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleSchema } from './UserRoleSchema';
import { RestaurantCreateNestedManyWithoutOwnerInputSchema } from './RestaurantCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  name: z.string(),
  role: z.lazy(() => UserRoleSchema).optional(),
  restaurants: z.lazy(() => RestaurantCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
