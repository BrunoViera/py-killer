import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleSchema } from './UserRoleSchema';
import { RestaurantUncheckedCreateNestedManyWithoutOwnerInputSchema } from './RestaurantUncheckedCreateNestedManyWithoutOwnerInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  name: z.string(),
  role: z.lazy(() => UserRoleSchema).optional(),
  restaurants: z.lazy(() => RestaurantUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
