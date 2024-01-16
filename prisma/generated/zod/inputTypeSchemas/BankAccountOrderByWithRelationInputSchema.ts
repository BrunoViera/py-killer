import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RestaurantOrderByWithRelationInputSchema } from './RestaurantOrderByWithRelationInputSchema';

export const BankAccountOrderByWithRelationInputSchema: z.ZodType<Prisma.BankAccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  published: z.lazy(() => SortOrderSchema).optional(),
  bankName: z.lazy(() => SortOrderSchema).optional(),
  accountNumber: z.lazy(() => SortOrderSchema).optional(),
  restaurantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Restaurant: z.lazy(() => RestaurantOrderByWithRelationInputSchema).optional()
}).strict();

export default BankAccountOrderByWithRelationInputSchema;
