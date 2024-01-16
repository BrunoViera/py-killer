import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantFindManyArgsSchema } from "../outputTypeSchemas/RestaurantFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  restaurants: z.union([z.boolean(),z.lazy(() => RestaurantFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
