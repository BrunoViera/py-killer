import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleSchema } from './UserRoleSchema';

export const UserCreateWithoutRestaurantsInputSchema: z.ZodType<Prisma.UserCreateWithoutRestaurantsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  name: z.string(),
  role: z.lazy(() => UserRoleSchema).optional()
}).strict();

export default UserCreateWithoutRestaurantsInputSchema;
