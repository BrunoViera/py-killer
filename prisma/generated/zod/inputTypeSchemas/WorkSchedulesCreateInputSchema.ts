import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedOneWithoutWorkSchedulesInputSchema } from './RestaurantCreateNestedOneWithoutWorkSchedulesInputSchema';

export const WorkSchedulesCreateInputSchema: z.ZodType<Prisma.WorkSchedulesCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  days: z.string(),
  from: z.coerce.date(),
  to: z.coerce.date(),
  Restaurant: z.lazy(() => RestaurantCreateNestedOneWithoutWorkSchedulesInputSchema).optional()
}).strict();

export default WorkSchedulesCreateInputSchema;
