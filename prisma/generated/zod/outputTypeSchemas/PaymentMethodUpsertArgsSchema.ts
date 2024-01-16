import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodIncludeSchema } from '../inputTypeSchemas/PaymentMethodIncludeSchema'
import { PaymentMethodWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentMethodWhereUniqueInputSchema'
import { PaymentMethodCreateInputSchema } from '../inputTypeSchemas/PaymentMethodCreateInputSchema'
import { PaymentMethodUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentMethodUncheckedCreateInputSchema'
import { PaymentMethodUpdateInputSchema } from '../inputTypeSchemas/PaymentMethodUpdateInputSchema'
import { PaymentMethodUncheckedUpdateInputSchema } from '../inputTypeSchemas/PaymentMethodUncheckedUpdateInputSchema'
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

export const PaymentMethodUpsertArgsSchema: z.ZodType<Prisma.PaymentMethodUpsertArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  include: PaymentMethodIncludeSchema.optional(),
  where: PaymentMethodWhereUniqueInputSchema,
  create: z.union([ PaymentMethodCreateInputSchema,PaymentMethodUncheckedCreateInputSchema ]),
  update: z.union([ PaymentMethodUpdateInputSchema,PaymentMethodUncheckedUpdateInputSchema ]),
}).strict()

export default PaymentMethodUpsertArgsSchema;
