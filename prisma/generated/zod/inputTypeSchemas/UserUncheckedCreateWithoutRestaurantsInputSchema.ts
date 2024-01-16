import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleSchema } from './UserRoleSchema';

export const UserUncheckedCreateWithoutRestaurantsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRestaurantsInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  name: z.string(),
  role: z.lazy(() => UserRoleSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutRestaurantsInputSchema;
