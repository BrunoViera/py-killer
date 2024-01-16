import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodIncludeSchema } from '../inputTypeSchemas/PaymentMethodIncludeSchema'
import { PaymentMethodUpdateInputSchema } from '../inputTypeSchemas/PaymentMethodUpdateInputSchema'
import { PaymentMethodUncheckedUpdateInputSchema } from '../inputTypeSchemas/PaymentMethodUncheckedUpdateInputSchema'
import { PaymentMethodWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentMethodWhereUniqueInputSchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentMethodSelectSchema: z.ZodType<Prisma.PaymentMethodSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  name: z.boolean().optional(),
  restaurantId: z.boolean().optional(),
  Restaurant: z.union([z.boolean(),z.lazy(() => RestaurantArgsSchema)]).optional(),
}).strict()

export const PaymentMethodUpdateArgsSchema: z.ZodType<Prisma.PaymentMethodUpdateArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  include: PaymentMethodIncludeSchema.optional(),
  data: z.union([ PaymentMethodUpdateInputSchema,PaymentMethodUncheckedUpdateInputSchema ]),
  where: PaymentMethodWhereUniqueInputSchema,
}).strict()

export default PaymentMethodUpdateArgsSchema;
