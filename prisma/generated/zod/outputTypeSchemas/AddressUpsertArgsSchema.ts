import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressIncludeSchema } from '../inputTypeSchemas/AddressIncludeSchema'
import { AddressWhereUniqueInputSchema } from '../inputTypeSchemas/AddressWhereUniqueInputSchema'
import { AddressCreateInputSchema } from '../inputTypeSchemas/AddressCreateInputSchema'
import { AddressUncheckedCreateInputSchema } from '../inputTypeSchemas/AddressUncheckedCreateInputSchema'
import { AddressUpdateInputSchema } from '../inputTypeSchemas/AddressUpdateInputSchema'
import { AddressUncheckedUpdateInputSchema } from '../inputTypeSchemas/AddressUncheckedUpdateInputSchema'
import { RestaurantFindManyArgsSchema } from "../outputTypeSchemas/RestaurantFindManyArgsSchema"
import { AddressCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddressCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  name: z.boolean().optional(),
  address: z.boolean().optional(),
  apartmenNumber: z.boolean().optional(),
  deliveryInformation: z.boolean().optional(),
  phone: z.boolean().optional(),
  country: z.boolean().optional(),
  Restaurant: z.union([z.boolean(),z.lazy(() => RestaurantFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AddressUpsertArgsSchema: z.ZodType<Prisma.AddressUpsertArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
  create: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
  update: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
}).strict()

export default AddressUpsertArgsSchema;
