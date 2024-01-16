import { z } from 'zod';

export const PaymentMethodScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','name','restaurantId']);

export default PaymentMethodScalarFieldEnumSchema;
