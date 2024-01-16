import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutRestaurantsNestedInputSchema } from './UserUpdateOneRequiredWithoutRestaurantsNestedInputSchema';
import { AddressUpdateOneRequiredWithoutRestaurantNestedInputSchema } from './AddressUpdateOneRequiredWithoutRestaurantNestedInputSchema';
import { CategoryUpdateManyWithoutRestaurantNestedInputSchema } from './CategoryUpdateManyWithoutRestaurantNestedInputSchema';
import { ProductUpdateManyWithoutRestaurantNestedInputSchema } from './ProductUpdateManyWithoutRestaurantNestedInputSchema';
import { PaymentMethodUpdateManyWithoutRestaurantNestedInputSchema } from './PaymentMethodUpdateManyWithoutRestaurantNestedInputSchema';
import { WorkSchedulesUpdateManyWithoutRestaurantNestedInputSchema } from './WorkSchedulesUpdateManyWithoutRestaurantNestedInputSchema';

export const RestaurantUpdateWithoutBankAccountInputSchema: z.ZodType<Prisma.RestaurantUpdateWithoutBankAccountInput> = z.object({
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
  owner: z.lazy(() => UserUpdateOneRequiredWithoutRestaurantsNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutRestaurantNestedInputSchema).optional(),
  Category: z.lazy(() => CategoryUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  Product: z.lazy(() => ProductUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  PaymentMethod: z.lazy(() => PaymentMethodUpdateManyWithoutRestaurantNestedInputSchema).optional(),
  WorkSchedules: z.lazy(() => WorkSchedulesUpdateManyWithoutRestaurantNestedInputSchema).optional()
}).strict();

export default RestaurantUpdateWithoutBankAccountInputSchema;
