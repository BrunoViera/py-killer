import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountIncludeSchema } from '../inputTypeSchemas/BankAccountIncludeSchema'
import { BankAccountWhereInputSchema } from '../inputTypeSchemas/BankAccountWhereInputSchema'
import { BankAccountOrderByWithRelationInputSchema } from '../inputTypeSchemas/BankAccountOrderByWithRelationInputSchema'
import { BankAccountWhereUniqueInputSchema } from '../inputTypeSchemas/BankAccountWhereUniqueInputSchema'
import { BankAccountScalarFieldEnumSchema } from '../inputTypeSchemas/BankAccountScalarFieldEnumSchema'
import { RestaurantArgsSchema } from "../outputTypeSchemas/RestaurantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const BankAccountFindManyArgsSchema: z.ZodType<Prisma.BankAccountFindManyArgs> = z.object({
  select: BankAccountSelectSchema.optional(),
  include: BankAccountIncludeSchema.optional(),
  where: BankAccountWhereInputSchema.optional(),
  orderBy: z.union([ BankAccountOrderByWithRelationInputSchema.array(),BankAccountOrderByWithRelationInputSchema ]).optional(),
  cursor: BankAccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BankAccountScalarFieldEnumSchema,BankAccountScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default BankAccountFindManyArgsSchema;
