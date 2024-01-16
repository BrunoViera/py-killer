import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { WorkSchedulesCreateManyRestaurantInputSchema } from './WorkSchedulesCreateManyRestaurantInputSchema';

export const WorkSchedulesCreateManyRestaurantInputEnvelopeSchema: z.ZodType<Prisma.WorkSchedulesCreateManyRestaurantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkSchedulesCreateManyRestaurantInputSchema),z.lazy(() => WorkSchedulesCreateManyRestaurantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WorkSchedulesCreateManyRestaurantInputEnvelopeSchema;
