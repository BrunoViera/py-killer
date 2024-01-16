import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressUpdateWithoutRestaurantInputSchema } from './AddressUpdateWithoutRestaurantInputSchema';
import { AddressUncheckedUpdateWithoutRestaurantInputSchema } from './AddressUncheckedUpdateWithoutRestaurantInputSchema';
import { AddressCreateWithoutRestaurantInputSchema } from './AddressCreateWithoutRestaurantInputSchema';
import { AddressUncheckedCreateWithoutRestaurantInputSchema } from './AddressUncheckedCreateWithoutRestaurantInputSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressUpsertWithoutRestaurantInputSchema: z.ZodType<Prisma.AddressUpsertWithoutRestaurantInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutRestaurantInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedCreateWithoutRestaurantInputSchema) ]),
  where: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export default AddressUpsertWithoutRestaurantInputSchema;
