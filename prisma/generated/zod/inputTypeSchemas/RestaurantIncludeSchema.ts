import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { CategoryFindManyArgsSchema } from "../outputTypeSchemas/CategoryFindManyArgsSchema"
import { ProductFindManyArgsSchema } from "../outputTypeSchemas/ProductFindManyArgsSchema"
import { PaymentMethodFindManyArgsSchema } from "../outputTypeSchemas/PaymentMethodFindManyArgsSchema"
import { BankAccountFindManyArgsSchema } from "../outputTypeSchemas/BankAccountFindManyArgsSchema"
import { WorkSchedulesFindManyArgsSchema } from "../outputTypeSchemas/WorkSchedulesFindManyArgsSchema"
import { RestaurantCountOutputTypeArgsSchema } from "../outputTypeSchemas/RestaurantCountOutputTypeArgsSchema"

export const RestaurantIncludeSchema: z.ZodType<Prisma.RestaurantInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  Category: z.union([z.boolean(),z.lazy(() => CategoryFindManyArgsSchema)]).optional(),
  Product: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  PaymentMethod: z.union([z.boolean(),z.lazy(() => PaymentMethodFindManyArgsSchema)]).optional(),
  BankAccount: z.union([z.boolean(),z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
  WorkSchedules: z.union([z.boolean(),z.lazy(() => WorkSchedulesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RestaurantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RestaurantIncludeSchema;
