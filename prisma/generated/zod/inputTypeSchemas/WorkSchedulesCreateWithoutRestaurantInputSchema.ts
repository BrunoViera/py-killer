import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const WorkSchedulesCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.WorkSchedulesCreateWithoutRestaurantInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  days: z.string(),
  from: z.coerce.date(),
  to: z.coerce.date()
}).strict();

export default WorkSchedulesCreateWithoutRestaurantInputSchema;
