import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','email','name','role']);

export default UserScalarFieldEnumSchema;
