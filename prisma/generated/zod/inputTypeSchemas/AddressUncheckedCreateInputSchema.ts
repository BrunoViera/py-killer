import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantUncheckedCreateNestedManyWithoutAddressInputSchema } from './RestaurantUncheckedCreateNestedManyWithoutAddressInputSchema';

export const AddressUncheckedCreateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  name: z.string(),
  address: z.string(),
  apartmenNumber: z.string().optional().nullable(),
  deliveryInformation: z.string().optional().nullable(),
  phone: z.string(),
  country: z.string(),
  Restaurant: z.lazy(() => RestaurantUncheckedCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default AddressUncheckedCreateInputSchema;
