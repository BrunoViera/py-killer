import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','name','description','price','restaurantId','categoryId']);

export default ProductScalarFieldEnumSchema;
