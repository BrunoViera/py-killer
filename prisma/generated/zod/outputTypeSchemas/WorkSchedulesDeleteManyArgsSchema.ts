import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesWhereInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereInputSchema'

export const WorkSchedulesDeleteManyArgsSchema: z.ZodType<Prisma.WorkSchedulesDeleteManyArgs> = z.object({
  where: WorkSchedulesWhereInputSchema.optional(),
}).strict()

export default WorkSchedulesDeleteManyArgsSchema;
