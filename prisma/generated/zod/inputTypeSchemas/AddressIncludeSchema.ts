import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantFindManyArgsSchema } from "../outputTypeSchemas/RestaurantFindManyArgsSchema"
import { AddressCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddressCountOutputTypeArgsSchema"

export const AddressIncludeSchema: z.ZodType<Prisma.AddressInclude> = z.object({
  Restaurant: z.union([z.boolean(),z.lazy(() => RestaurantFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AddressIncludeSchema;
