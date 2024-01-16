import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressCreateWithoutRestaurantInputSchema } from './AddressCreateWithoutRestaurantInputSchema';
import { AddressUncheckedCreateWithoutRestaurantInputSchema } from './AddressUncheckedCreateWithoutRestaurantInputSchema';
import { AddressCreateOrConnectWithoutRestaurantInputSchema } from './AddressCreateOrConnectWithoutRestaurantInputSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';

export const AddressCreateNestedOneWithoutRestaurantInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutRestaurantInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedCreateWithoutRestaurantInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutRestaurantInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export default AddressCreateNestedOneWithoutRestaurantInputSchema;
