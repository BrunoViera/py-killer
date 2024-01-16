import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressRelationFilterSchema: z.ZodType<Prisma.AddressRelationFilter> = z.object({
  is: z.lazy(() => AddressWhereInputSchema).optional(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export default AddressRelationFilterSchema;
