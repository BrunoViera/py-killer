import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { RestaurantRelationFilterSchema } from './RestaurantRelationFilterSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { CategoryNullableRelationFilterSchema } from './CategoryNullableRelationFilterSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  published: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  restaurantId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  categoryId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  restaurant: z.union([ z.lazy(() => RestaurantRelationFilterSchema),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  Category: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
}).strict());

export default ProductWhereUniqueInputSchema;
