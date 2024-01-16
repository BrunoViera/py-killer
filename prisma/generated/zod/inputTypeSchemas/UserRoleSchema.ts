import { z } from 'zod';

export const UserRoleSchema = z.enum(['USER','ADMIN','KITCHEN','WAITER']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export default UserRoleSchema;
