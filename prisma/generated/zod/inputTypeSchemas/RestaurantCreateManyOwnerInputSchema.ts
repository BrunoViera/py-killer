import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const RestaurantCreateManyOwnerInputSchema: z.ZodType<Prisma.RestaurantCreateManyOwnerInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  bromatology: z.string().optional().nullable(),
  razonSocial: z.string(),
  hasDelivery: z.boolean().optional(),
  hasPickUp: z.boolean().optional(),
  mapCoordinates: z.string().optional().nullable(),
  shippingCost: z.number().optional().nullable(),
  addressId: z.number().int()
}).strict();

export default RestaurantCreateManyOwnerInputSchema;
