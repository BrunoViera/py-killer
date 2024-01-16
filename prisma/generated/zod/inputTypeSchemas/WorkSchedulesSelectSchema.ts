import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const WorkSchedulesSelectSchema: z.ZodType<Prisma.WorkSchedulesSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  days: z.boolean().optional(),
  from: z.boolean().optional(),
  to: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  Restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default WorkSchedulesSelectSchema;
