import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateManyOwnerInputSchema } from './RestaurantCreateManyOwnerInputSchema';

export const RestaurantCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.RestaurantCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RestaurantCreateManyOwnerInputSchema),z.lazy(() => RestaurantCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RestaurantCreateManyOwnerInputEnvelopeSchema;
