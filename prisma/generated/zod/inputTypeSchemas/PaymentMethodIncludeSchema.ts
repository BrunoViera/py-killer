import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"

export const PaymentMethodIncludeSchema: z.ZodType<Prisma.PaymentMethodInclude> = z.object({
  Restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export default PaymentMethodIncludeSchema;
