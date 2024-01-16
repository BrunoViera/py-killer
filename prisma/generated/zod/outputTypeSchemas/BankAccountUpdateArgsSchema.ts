import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountIncludeSchema } from '../inputTypeSchemas/BankAccountIncludeSchema'
import { BankAccountUpdateInputSchema } from '../inputTypeSchemas/BankAccountUpdateInputSchema'
import { BankAccountUncheckedUpdateInputSchema } from '../inputTypeSchemas/BankAccountUncheckedUpdateInputSchema'
import { BankAccountWhereUniqueInputSchema } from '../inputTypeSchemas/BankAccountWhereUniqueInputSchema'
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

export const BankAccountUpdateArgsSchema: z.ZodType<Prisma.BankAccountUpdateArgs> = z.object({
  select: BankAccountSelectSchema.optional(),
  include: BankAccountIncludeSchema.optional(),
  data: z.union([ BankAccountUpdateInputSchema,BankAccountUncheckedUpdateInputSchema ]),
  where: BankAccountWhereUniqueInputSchema,
}).strict()

export default BankAccountUpdateArgsSchema;
