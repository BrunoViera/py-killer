import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { RestaurantCreateWithoutCategoryInputSchema } from './RestaurantCreateWithoutCategoryInputSchema';
import { RestaurantUncheckedCreateWithoutCategoryInputSchema } from './RestaurantUncheckedCreateWithoutCategoryInputSchema';
import { RestaurantCreateOrConnectWithoutCategoryInputSchema } from './RestaurantCreateOrConnectWithoutCategoryInputSchema';
import { RestaurantUpsertWithoutCategoryInputSchema } from './RestaurantUpsertWithoutCategoryInputSchema';
import { RestaurantWhereUniqueInputSchema } from './RestaurantWhereUniqueInputSchema';
import { RestaurantUpdateToOneWithWhereWithoutCategoryInputSchema } from './RestaurantUpdateToOneWithWhereWithoutCategoryInputSchema';
import { RestaurantUpdateWithoutCategoryInputSchema } from './RestaurantUpdateWithoutCategoryInputSchema';
import { RestaurantUncheckedUpdateWithoutCategoryInputSchema } from './RestaurantUncheckedUpdateWithoutCategoryInputSchema';

export const RestaurantUpdateOneRequiredWithoutCategoryNestedInputSchema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => RestaurantCreateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedCreateWithoutCategoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RestaurantCreateOrConnectWithoutCategoryInputSchema).optional(),
  upsert: z.lazy(() => RestaurantUpsertWithoutCategoryInputSchema).optional(),
  connect: z.lazy(() => RestaurantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RestaurantUpdateToOneWithWhereWithoutCategoryInputSchema),z.lazy(() => RestaurantUpdateWithoutCategoryInputSchema),z.lazy(() => RestaurantUncheckedUpdateWithoutCategoryInputSchema) ]).optional(),
}).strict();

export default RestaurantUpdateOneRequiredWithoutCategoryNestedInputSchema;
