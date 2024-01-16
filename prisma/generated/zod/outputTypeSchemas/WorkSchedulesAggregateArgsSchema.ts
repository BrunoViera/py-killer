import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesWhereInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereInputSchema'
import { WorkSchedulesOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkSchedulesOrderByWithRelationInputSchema'
import { WorkSchedulesWhereUniqueInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereUniqueInputSchema'

export const WorkSchedulesAggregateArgsSchema: z.ZodType<Prisma.WorkSchedulesAggregateArgs> = z.object({
  where: WorkSchedulesWhereInputSchema.optional(),
  orderBy: z.union([ WorkSchedulesOrderByWithRelationInputSchema.array(),WorkSchedulesOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkSchedulesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default WorkSchedulesAggregateArgsSchema;
