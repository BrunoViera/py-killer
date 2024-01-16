import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateNestedManyWithoutAddressInputSchema } from './RestaurantCreateNestedManyWithoutAddressInputSchema';

export const AddressCreateInputSchema: z.ZodType<Prisma.AddressCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  address: z.string(),
  apartmenNumber: z.string().optional().nullable(),
  deliveryInformation: z.string().optional().nullable(),
  phone: z.string(),
  country: z.string(),
  Restaurant: z.lazy(() => RestaurantCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default AddressCreateInputSchema;
