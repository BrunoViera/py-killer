import { z } from 'zod';
import { UserRoleSchema } from '../inputTypeSchemas/UserRoleSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRoleSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  email: z.string(),
  name: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
