import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const BankAccountSelectSchema: z.ZodType<Prisma.BankAccountSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  bankName: z.boolean().optional(),
  accountNumber: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  Restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default BankAccountSelectSchema;
