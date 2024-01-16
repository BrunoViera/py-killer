import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RestaurantCountOutputTypeSelectSchema: z.ZodType<Prisma.RestaurantCountOutputTypeSelect> = z.object({
  Category: z.boolean().optional(),
  Product: z.boolean().optional(),
  PaymentMethod: z.boolean().optional(),
  BankAccount: z.boolean().optional(),
  WorkSchedules: z.boolean().optional(),
}).strict();

export default RestaurantCountOutputTypeSelectSchema;
