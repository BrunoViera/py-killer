import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkSchedulesUpdateManyMutationInputSchema'
import { WorkSchedulesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkSchedulesUncheckedUpdateManyInputSchema'
import { WorkSchedulesWhereInputSchema } from '../inputTypeSchemas/WorkSchedulesWhereInputSchema'

export const WorkSchedulesUpdateManyArgsSchema: z.ZodType<Prisma.WorkSchedulesUpdateManyArgs> = z.object({
  data: z.union([ WorkSchedulesUpdateManyMutationInputSchema,WorkSchedulesUncheckedUpdateManyInputSchema ]),
  where: WorkSchedulesWhereInputSchema.optional(),
}).strict()

export default WorkSchedulesUpdateManyArgsSchema;
