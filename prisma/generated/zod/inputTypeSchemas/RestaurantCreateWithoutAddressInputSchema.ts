import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutRestaurantsInputSchema } from './UserCreateNestedOneWithoutRestaurantsInputSchema';
import { CategoryCreateNestedManyWithoutRestaurantInputSchema } from './CategoryCreateNestedManyWithoutRestaurantInputSchema';
import { ProductCreateNestedManyWithoutRestaurantInputSchema } from './ProductCreateNestedManyWithoutRestaurantInputSchema';
import { PaymentMethodCreateNestedManyWithoutRestaurantInputSchema } from './PaymentMethodCreateNestedManyWithoutRestaurantInputSchema';
import { BankAccountCreateNestedManyWithoutRestaurantInputSchema } from './BankAccountCreateNestedManyWithoutRestaurantInputSchema';
import { WorkSchedulesCreateNestedManyWithoutRestaurantInputSchema } from './WorkSchedulesCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantCreateWithoutAddressInputSchema: z.ZodType<Prisma.RestaurantCreateWithoutAddressInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  bromatology: z.string().optional().nullable(),
  razonSocial: z.string(),
  hasDelivery: z.boolean().optional(),
  hasPickUp: z.boolean().optional(),
  mapCoordinates: z.string().optional().nullable(),
  shippingCost: z.number().optional().nullable(),
  owner: z.lazy(() => UserCreateNestedOneWithoutRestaurantsInputSchema),
  Category: z.lazy(() => CategoryCreateNestedManyWithoutRestaurantInputSchema).optional(),
  Product: z.lazy(() => ProductCreateNestedManyWithoutRestaurantInputSchema).optional(),
  PaymentMethod: z.lazy(() => PaymentMethodCreateNestedManyWithoutRestaurantInputSchema).optional(),
  BankAccount: z.lazy(() => BankAccountCreateNestedManyWithoutRestaurantInputSchema).optional(),
  WorkSchedules: z.lazy(() => WorkSchedulesCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantCreateWithoutAddressInputSchema;
