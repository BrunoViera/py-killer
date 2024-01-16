import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantNullableRelationFilterSchema: z.ZodType<Prisma.RestaurantNullableRelationFilter> = z.object({
  is: z.lazy(() => RestaurantWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RestaurantWhereInputSchema).optional().nullable()
}).strict();

export default RestaurantNullableRelationFilterSchema;
