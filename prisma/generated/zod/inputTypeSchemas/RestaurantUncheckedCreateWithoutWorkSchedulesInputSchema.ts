import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { ProductUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './ProductUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { PaymentMethodUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './PaymentMethodUncheckedCreateNestedManyWithoutRestaurantInputSchema';
import { BankAccountUncheckedCreateNestedManyWithoutRestaurantInputSchema } from './BankAccountUncheckedCreateNestedManyWithoutRestaurantInputSchema';

export const RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema: z.ZodType<Prisma.RestaurantUncheckedCreateWithoutWorkSchedulesInput> = z.object({
  id: z.number().int().optional(),
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
  userId: z.number().int(),
  addressId: z.number().int(),
  Category: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  Product: z.lazy(() => ProductUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  PaymentMethod: z.lazy(() => PaymentMethodUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional(),
  BankAccount: z.lazy(() => BankAccountUncheckedCreateNestedManyWithoutRestaurantInputSchema).optional()
}).strict();

export default RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema;
