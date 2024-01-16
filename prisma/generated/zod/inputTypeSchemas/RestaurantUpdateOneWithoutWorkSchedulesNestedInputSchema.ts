import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutWorkSchedulesInputSchema } from './RestaurantCreateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema';
import { RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema } from './RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema';
import { RestaurantUpsertWithoutWorkSchedulesInputSchema } from './RestaurantUpsertWithoutWorkSchedulesInputSchema';
import { RestaurantWhereInputSchema } from './RestaurantWhereInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutWorkSchedulesInputSchema } from './RestaurantUpdateToOneWithWhereWithoutWorkSchedulesInputSchema';
import { RestaurantUpdateWithoutWorkSchedulesInputSchema } from './RestaurantUpdateWithoutWorkSchedulesInputSchema';
import { RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema } from './RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema';

export const RestaurantUpdateOneWithoutWorkSchedulesNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneWithoutWorkSchedulesNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutWorkSchedulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutWorkSchedulesInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutWorkSchedulesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RestaurantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUpdateWithoutWorkSchedulesInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutWorkSchedulesInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneWithoutWorkSchedulesNestedInputSchema;
