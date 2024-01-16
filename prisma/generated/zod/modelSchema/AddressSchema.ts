import { z } from 'zod';

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  published: z.boolean(),
  name: z.string(),
  address: z.string(),
  apartmenNumber: z.string().nullable(),
  deliveryInformation: z.string().nullable(),
  phone: z.string(),
  country: z.string(),
})

export type Address = z.infer<typeof AddressSchema>

export default AddressSchema;
