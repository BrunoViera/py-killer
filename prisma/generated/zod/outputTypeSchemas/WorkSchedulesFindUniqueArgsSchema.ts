import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesIncludeSchema } from '../inputTypeSchemas/WorkSchedulesIncludeSchema'
import { WorkSchedulesWhereUniqueInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereUniqueInputSchema'
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

export const WorkSchedulesFindUniqueArgsSchema: z.ZodType<Prisma.WorkSchedulesFindUniqueArgs> = z.object({
  select: WorkSchedulesSelectSchema.optional(),
  include: WorkSchedulesIncludeSchema.optional(),
  where: WorkSchedulesWhereUniqueInputSchema,
}).strict()

export default WorkSchedulesFindUniqueArgsSchema;
