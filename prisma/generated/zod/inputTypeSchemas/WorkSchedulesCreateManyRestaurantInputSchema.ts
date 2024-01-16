import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const WorkSchedulesCreateManyRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesCreateManyRestaurantInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  days: z.string(),
  from: z.coerce.date(),
  to: z.coerce.date()
}).strict();

export default WorkSchedulesCreateManyRestaurantInputSchema;
