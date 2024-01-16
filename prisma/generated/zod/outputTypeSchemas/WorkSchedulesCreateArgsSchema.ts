import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesIncludeSchema } from '../inputTypeSchemas/WorkSchedulesIncludeSchema'
import { WorkSchedulesCreateInputSchema } from '../inputTypeSchemas/WorkSchedulesCreateInputSchema'
import { WorkSchedulesUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkSchedulesUncheckedCreateInputSchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const WorkSchedulesCreateArgsSchema: z.ZodType<Prisma.WorkSchedulesCreateArgs> = z.object({
  select: WorkSchedulesSelectSchema.optional(),
  include: WorkSchedulesIncludeSchema.optional(),
  data: z.union([ WorkSchedulesCreateInputSchema,WorkSchedulesUncheckedCreateInputSchema ]),
}).strict()

export default WorkSchedulesCreateArgsSchema;
