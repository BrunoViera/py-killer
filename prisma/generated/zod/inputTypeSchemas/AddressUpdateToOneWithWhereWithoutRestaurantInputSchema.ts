import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { AddressUpdateWithoutRestaurantInputSchema } from './AddressUpdateWithoutRestaurantInputSchema';
import { AddressUncheckedUpdateWithoutRestaurantInputSchema } from './AddressUncheckedUpdateWithoutRestaurantInputSchema';

export const AddressUpdateToOneWithWhereWithoutRestaurantInputSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutRestaurantInput> = z.object({
  where: z.lazy(() => AddressWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddressUpdateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutRestaurantInputSchema) ]),
}).strict();

export default AddressUpdateToOneWithWhereWithoutRestaurantInputSchema;
