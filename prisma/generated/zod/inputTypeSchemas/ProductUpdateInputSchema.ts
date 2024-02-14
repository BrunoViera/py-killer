import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { RestaurantUpdateOneRequiredWithoutProductNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutProductNestedInputSchema';
import { CategoryUpdateOneWithoutProductsNestedInputSchema } from './CategoryUpdateOneWithoutProductsNestedInputSchema';

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string({required_error: "Ingrese un nombre al producto"}).min(3, { message: "Ingrese un nombre al producto" }),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number({ invalid_type_error: "Ingrese un precio válido"}).min(0, {message: "Ingrese un monto mayor o igual a 0"}),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  restaurant: z.lazy(() => RestaurantUpdateOneRequiredWithoutProductNestedInputSchema).optional(),
  Category: z.lazy(() => CategoryUpdateOneWithoutProductsNestedInputSchema).optional()
}).strict();

export default ProductUpdateInputSchema;
