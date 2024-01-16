import { z } from 'zod';

/////////////////////////////////////////
// RESTAURANT SCHEMA
/////////////////////////////////////////

export const RestaurantSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  name: z.string(),
  description: z.string().nullable(),
  bromatology: z.string().nullable(),
  razonSocial: z.string(),
  hasDelivery: z.boolean(),
  hasPickUp: z.boolean(),
  mapCoordinates: z.string().nullable(),
  shippingCost: z.number().nullable(),
  userId: z.number().int(),
  addressId: z.number().int(),
})

export type Restaurant = z.infer<typeof RestaurantSchema>

export default RestaurantSchema;
