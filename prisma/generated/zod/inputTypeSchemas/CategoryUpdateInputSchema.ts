import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProductUpdateManyWithoutCategoryNestedInputSchema } from './ProductUpdateManyWithoutCategoryNestedInputSchema';
import { RestaurantUpdateOneRequiredWithoutCategoryNestedInputSchema } from './RestaurantUpdateOneRequiredWithoutCategoryNestedInputSchema';

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  published: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string({ required_error: "Ingrese un nombre a la categoria",  }).min(3),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoryNestedInputSchema).optional(),
  restaurant: z.lazy(() => RestaurantUpdateOneRequiredWithoutCategoryNestedInputSchema).optional()
}).strict();

export default CategoryUpdateInputSchema;
