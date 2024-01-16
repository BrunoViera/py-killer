import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutProductInputSchema } from './RestaurantCreateWithoutProductInputSchema';
import { RestaurantUncheckedCreateWithoutProductInputSchema } from './RestaurantUncheckedCreateWithoutProductInputSchema';
import { RestaurantCreateOrConnectWithoutProductInputSchema } from './RestaurantCreateOrConnectWithoutProductInputSchema';
import { RestaurantUpsertWithoutProductInputSchema } from './RestaurantUpsertWithoutProductInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutProductInputSchema } from './RestaurantUpdateToOneWithWhereWithoutProductInputSchema';
import { RestaurantUpdateWithoutProductInputSchema } from './RestaurantUpdateWithoutProductInputSchema';
import { RestaurantUncheckedUpdateWithoutProductInputSchema } from './RestaurantUncheckedUpdateWithoutProductInputSchema';

export const RestaurantUpdateOneRequiredWithoutProductNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutProductInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutProductInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutProductInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutProductInputSchema),z.lazy(() => RestaurantUpdateWithoutProductInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutProductInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutProductNestedInputSchema;
