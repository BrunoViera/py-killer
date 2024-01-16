import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AddressCountOutputTypeSelectSchema: z.ZodType<Prisma.AddressCountOutputTypeSelect> = z.object({
  Restaurant: z.boolean().optional(),
}).strict();

export default AddressCountOutputTypeSelectSchema;
