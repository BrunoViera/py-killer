import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { CategoryUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './CategoryUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { ProductUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './ProductUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { PaymentMethodUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './PaymentMethodUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { BankAccountUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './BankAccountUncheckedUpdateManyWithoutRestaurantNestedInputSchema';
import { WorkSchedulesUncheckedUpdateManyWithoutRestaurantNestedInputSchema } from './WorkSchedulesUncheckedUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.RestaurantUncheckedUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bromatology: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  razonSocial: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hasDelivery: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hasPickUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  mapCoordinates: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  shippingCost: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  Category: z.lazy(() => CategoryUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  Product: z.lazy(() => ProductUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  PaymentMethod: z.lazy(() => PaymentMethodUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  BankAccount: z.lazy(() => BankAccountUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  WorkSchedules: z.lazy(() => WorkSchedulesUncheckedUpdateManyWithoutRestaurantNestedInputSchema).optional()
}).strict();

export default RestaurantUncheckedUpdateWithoutOwnerInputSchema;
