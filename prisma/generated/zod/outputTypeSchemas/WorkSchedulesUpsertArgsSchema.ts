import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesIncludeSchema } from '../inputTypeSchemas/WorkSchedulesIncludeSchema'
import { WorkSchedulesWhereUniqueInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereUniqueInputSchema'
import { WorkSchedulesCreateInputSchema } from '../inputTypeSchemas/WorkSchedulesCreateInputSchema'
import { WorkSchedulesUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkSchedulesUncheckedCreateInputSchema'
import { WorkSchedulesUpdateInputSchema } from '../inputTypeSchemas/WorkSchedulesUpdateInputSchema'
import { WorkSchedulesUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkSchedulesUncheckedUpdateInputSchema'
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

export const WorkSchedulesUpsertArgsSchema: z.ZodType<Prisma.WorkSchedulesUpsertArgs> = z.object({
  select: WorkSchedulesSelectSchema.optional(),
  include: WorkSchedulesIncludeSchema.optional(),
  where: WorkSchedulesWhereUniqueInputSchema,
  create: z.union([ WorkSchedulesCreateInputSchema,WorkSchedulesUncheckedCreateInputSchema ]),
  update: z.union([ WorkSchedulesUpdateInputSchema,WorkSchedulesUncheckedUpdateInputSchema ]),
}).strict()

export default WorkSchedulesUpsertArgsSchema;
