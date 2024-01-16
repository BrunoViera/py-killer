import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressCreateWithoutRestaurantInputSchema } from './AddressCreateWithoutRestaurantInputSchema';
import { AddressUncheckedCreateWithoutRestaurantInputSchema } from './AddressUncheckedCreateWithoutRestaurantInputSchema';
import { AddressCreateOrConnectWithoutRestaurantInputSchema } from './AddressCreateOrConnectWithoutRestaurantInputSchema';
import { AddressUpsertWithoutRestaurantInputSchema } from './AddressUpsertWithoutRestaurantInputSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressUpdateToOneWithWhereWithoutRestaurantInputSchema } from './AddressUpdateToOneWithWhereWithoutRestaurantInputSchema';
import { AddressUpdateWithoutRestaurantInputSchema } from './AddressUpdateWithoutRestaurantInputSchema';
import { AddressUncheckedUpdateWithoutRestaurantInputSchema } from './AddressUncheckedUpdateWithoutRestaurantInputSchema';

export const AddressUpdateOneRequiredWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedCreateWithoutRestaurantInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutRestaurantInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutRestaurantInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateToOneWithWhereWithoutRestaurantInputSchema),z.lazy(() => AddressUpdateWithoutRestaurantInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutRestaurantInputSchema) ]).optional(),
}).strict();

export default AddressUpdateOneRequiredWithoutRestaurantNestedInputSchema;
