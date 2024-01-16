import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodIncludeSchema } from '../inputTypeSchemas/PaymentMethodIncludeSchema'
import { PaymentMethodWhereInputSchema } from '../inputTypeSchemas/PaymentMethodWhereInputSchema'
import { PaymentMethodOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentMethodOrderByWithRelationInputSchema'
import { PaymentMethodWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentMethodWhereUniqueInputSchema'
import { PaymentMethodScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentMethodScalarFieldEnumSchema'
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

export const PaymentMethodFindManyArgsSchema: z.ZodType<Prisma.PaymentMethodFindManyArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  include: PaymentMethodIncludeSchema.optional(),
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentMethodScalarFieldEnumSchema,PaymentMethodScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PaymentMethodFindManyArgsSchema;
