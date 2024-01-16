import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateManyAddressInputSchema } from './RestaurantCreateManyAddressInputSchema';

export const RestaurantCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.RestaurantCreateManyAddressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RestaurantCreateManyAddressInputSchema),z.lazy(() => RestaurantCreateManyAddressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RestaurantCreateManyAddressInputEnvelopeSchema;
