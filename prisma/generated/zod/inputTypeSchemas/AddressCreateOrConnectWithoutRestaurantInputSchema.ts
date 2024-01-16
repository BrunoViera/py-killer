import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressCreateWithoutRestaurantInputSchema } from './AddressCreateWithoutRestaurantInputSchema';
import { AddressUncheckedCreateWithoutRestaurantInputSchema } from './AddressUncheckedCreateWithoutRestaurantInputSchema';

export const AddressCreateOrConnectWithoutRestaurantInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutRestaurantInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedCreateWithoutRestaurantInputSchema) ]),
}).strict();

export default AddressCreateOrConnectWithoutRestaurantInputSchema;
