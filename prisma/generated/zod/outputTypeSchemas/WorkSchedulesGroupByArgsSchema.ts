import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesWhereInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereInputSchema'
import { WorkSchedulesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkSchedulesOrderByWithAggregationInputSchema'
import { WorkSchedulesScalarFieldEnumSchema } from '../inputTypeSchemas/WorkSchedulesScalarFieldEnumSchema'
import { WorkSchedulesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkSchedulesScalarWhereWithAggregatesInputSchema'

export const WorkSchedulesGroupByArgsSchema: z.ZodType<Prisma.WorkSchedulesGroupByArgs> = z.object({
  where: WorkSchedulesWhereInputSchema.optional(),
  orderBy: z.union([ WorkSchedulesOrderByWithAggregationInputSchema.array(),WorkSchedulesOrderByWithAggregationInputSchema ]).optional(),
  by: WorkSchedulesScalarFieldEnumSchema.array(),
  having: WorkSchedulesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default WorkSchedulesGroupByArgsSchema;
