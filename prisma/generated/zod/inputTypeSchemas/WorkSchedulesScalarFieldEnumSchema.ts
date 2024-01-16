import { z } from 'zod';

export const WorkSchedulesScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','days','from','to','restaurantId']);

export default WorkSchedulesScalarFieldEnumSchema;
