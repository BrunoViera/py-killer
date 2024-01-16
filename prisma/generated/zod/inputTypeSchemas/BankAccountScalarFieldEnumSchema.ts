import { z } from 'zod';

export const BankAccountScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','bankName','accountNumber','restaurantId']);

export default BankAccountScalarFieldEnumSchema;
