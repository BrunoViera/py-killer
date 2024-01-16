import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestaurantIncludeSchema } from '../inputTypeSchemas/RestaurantIncludeSchema'
import { RestaurantWhereInputSchema } from '../inputTypeSchemas/RestaurantWhereInputSchema'
import { RestaurantOrderByWithRelationInputSchema } from '../inputTypeSchemas/RestaurantOrderByWithRelationInputSchema'
import { RestaurantWhereUniqueInputSchema } from '../inputTypeSchemas/RestaurantWhereUniqueInputSchema'
import { RestaurantScalarFieldEnumSchema } from '../inputTypeSchemas/RestaurantScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { CategoryFindManyArgsSchema } from "../outputTypeSchemas/CategoryFindManyArgsSchema"
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema"
import { PaymentMethodFindManyArgsSchema } from "../outputTypeSchemas/PaymentMethodFindManyArgsSchema"
import { BankAccountFindManyArgsSchema } from "../outputTypeSchemas/BankAccountFindManyArgsSchema"
import { WorkSchedulesFindManyArgsSchema } from "../outputTypeSchemas/WorkSchedulesFindManyArgsSchema"
import { RestaurantCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RestaurantSelectSchema: z.ZodType<Prisma.RestaurantSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  bromatology: z.boolean().optional(),
  razonSocial: z.boolean().optional(),
  hasDelivery: z.boolean().optional(),
  hasPickUp: z.boolean().optional(),
  mapCoordinates: z.boolean().optional(),
  shippingCost: z.boolean().optional(),
  userId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  Category: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  Product: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  PaymentMethod: z.union([z.boolean(),z.lazy(() => PaymentMethodFindManyArgsSchema)]).optional(),
  BankAccount: z.union([z.boolean(),z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
  WorkSchedules: z.union([z.boolean(),z.lazy(() => WorkSchedulesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestaurantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RestaurantFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RestaurantFindFirstOrThrowArgs> = z.object({
  select: RestaurantSelectSchema.optional(),
  include: RestaurantIncludeSchema.optional(),
  where: RestaurantWhereInputSchema.optional(),
  orderBy: z.union([ RestaurantOrderByWithRelationInputSchema.array(),RestaurantOrderByWithRelationInputSchema ]).optional(),
  cursor: RestaurantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RestaurantScalarFieldEnumSchema,RestaurantScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default RestaurantFindFirstOrThrowArgsSchema;
