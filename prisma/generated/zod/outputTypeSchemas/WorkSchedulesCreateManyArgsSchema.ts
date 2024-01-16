import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesCreateManyInputSchema } from '../inputTypeSchemas/WorkSchedulesCreateManyInputSchema'

export const WorkSchedulesCreateManyArgsSchema: z.ZodType<Prisma.WorkSchedulesCreateManyArgs> = z.object({
  data: z.union([ WorkSchedulesCreateManyInputSchema,WorkSchedulesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default WorkSchedulesCreateManyArgsSchema;
