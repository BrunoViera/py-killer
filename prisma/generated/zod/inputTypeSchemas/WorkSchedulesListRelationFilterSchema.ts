import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesWhereInputSchema } from './WorkSchedulesWhereInputSchema';

export const WorkSchedulesListRelationFilterSchema: z.ZodType<Prisma.WorkSchedulesListRelationFilter> = z.object({
  every: z.lazy(() => WorkSchedulesWhereInputSchema).optional(),
  some: z.lazy(() => WorkSchedulesWhereInputSchema).optional(),
  none: z.lazy(() => WorkSchedulesWhereInputSchema).optional()
}).strict();

export default WorkSchedulesListRelationFilterSchema;
