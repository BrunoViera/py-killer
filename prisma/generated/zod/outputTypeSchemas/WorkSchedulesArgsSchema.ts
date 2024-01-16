import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkSchedulesSelectSchema } from '../inputTypeSchemas/WorkSchedulesSelectSchema';
import { WorkSchedulesIncludeSchema } from '../inputTypeSchemas/WorkSchedulesIncludeSchema';

export const WorkSchedulesArgsSchema: z.ZodType<Prisma.WorkSchedulesDefaultArgs> = z.object({
  select: z.lazy(() => WorkSchedulesSelectSchema).optional(),
  include: z.lazy(() => WorkSchedulesIncludeSchema).optional(),
}).strict();

export default WorkSchedulesArgsSchema;
