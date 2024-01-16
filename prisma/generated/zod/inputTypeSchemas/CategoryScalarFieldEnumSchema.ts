import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','name','description','restaurantId']);

export default CategoryScalarFieldEnumSchema;
