import { z } from 'zod';

/////////////////////////////////////////
// WORK SCHEDULES SCHEMA
/////////////////////////////////////////

export const WorkSchedulesSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  days: z.string(),
  from: z.coerce.date(),
  to: z.coerce.date(),
  restaurantId: z.number().int().nullable(),
})

export type WorkSchedules = z.infer<typeof WorkSchedulesSchema>

export default WorkSchedulesSchema;
