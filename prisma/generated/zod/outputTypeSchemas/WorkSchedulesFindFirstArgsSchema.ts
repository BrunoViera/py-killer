import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesIncludeSchema } from '../inputTypeSchemas/WorkSchedulesIncludeSchema'
import { WorkSchedulesWhereInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereInputSchema'
import { WorkSchedulesOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkSchedulesOrderByWithRelationInputSchema'
import { WorkSchedulesWhereUniqueInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereUniqueInputSchema'
import { WorkSchedulesScalarFieldEnumSchema } from '../inputTypeSchemas/WorkSchedulesScalarFieldEnumSchema'
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

export const WorkSchedulesFindFirstArgsSchema: z.ZodType<Prisma.WorkSchedulesFindFirstArgs> = z.object({
  select: WorkSchedulesSelectSchema.optional(),
  include: WorkSchedulesIncludeSchema.optional(),
  where: WorkSchedulesWhereInputSchema.optional(),
  orderBy: z.union([ WorkSchedulesOrderByWithRelationInputSchema.array(),WorkSchedulesOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkSchedulesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkSchedulesScalarFieldEnumSchema,WorkSchedulesScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default WorkSchedulesFindFirstArgsSchema;
