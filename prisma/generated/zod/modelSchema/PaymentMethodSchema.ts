import { z } from 'zod';

/////////////////////////////////////////
// PAYMENT METHOD SCHEMA
/////////////////////////////////////////

export const PaymentMethodSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  name: z.string(),
  restaurantId: z.number().int().nullable(),
})

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>

export default PaymentMethodSchema;
