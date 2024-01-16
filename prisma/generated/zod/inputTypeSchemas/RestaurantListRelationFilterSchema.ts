import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';

export const RestaurantListRelationFilterSchema: z.ZodType<Prisma.RestaurantListRelationFilter> = z.object({
  every: z.lazy(() => RestaurantWhereInputSchema).optional(),
  some: z.lazy(() => RestaurantWhereInputSchema).optional(),
  none: z.lazy(() => RestaurantWhereInputSchema).optional()
}).strict();

export default RestaurantListRelationFilterSchema;
