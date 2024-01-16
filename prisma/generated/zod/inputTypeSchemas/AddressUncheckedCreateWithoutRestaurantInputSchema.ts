import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const AddressUncheckedCreateWithoutRestaurantInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutRestaurantInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  address: z.string(),
  apartmenNumber: z.string().optional().nullable(),
  deliveryInformation: z.string().optional().nullable(),
  phone: z.string(),
  country: z.string()
}).strict();

export default AddressUncheckedCreateWithoutRestaurantInputSchema;
