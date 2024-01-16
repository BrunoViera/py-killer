import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CategoryCreateWithoutRestaurantInputSchema } from './CategoryCreateWithoutRestaurantInputSchema';
import { CategoryUncheckedCreateWithoutRestaurantInputSchema } from './CategoryUncheckedCreateWithoutRestaurantInputSchema';
import { CategoryCreateOrConnectWithoutRestaurantInputSchema } from './CategoryCreateOrConnectWithoutRestaurantInputSchema';
import { CategoryUpsertWithWhereUniqueWithoutRestaurantInputSchema } from './CategoryUpsertWithWhereUniqueWithoutRestaurantInputSchema';
import { CategoryCreateManyRestaurantInputEnvelopeSchema } from './CategoryCreateManyRestaurantInputEnvelopeSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateWithWhereUniqueWithoutRestaurantInputSchema } from './CategoryUpdateWithWhereUniqueWithoutRestaurantInputSchema';
import { CategoryUpdateManyWithWhereWithoutRestaurantInputSchema } from './CategoryUpdateManyWithWhereWithoutRestaurantInputSchema';
import { CategoryScalarWhereInputSchema } from './CategoryScalarWhereInputSchema';

export const CategoryUpdateManyWithoutRestaurantNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutRestaurantNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutRestaurantInputSchema),z.lazy(() => CategoryCreateWithoutRestaurantInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutRestaurantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutRestaurantInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutRestaurantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyRestaurantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutRestaurantInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutRestaurantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutRestaurantInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutRestaurantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CategoryUpdateManyWithoutRestaurantNestedInputSchema;
