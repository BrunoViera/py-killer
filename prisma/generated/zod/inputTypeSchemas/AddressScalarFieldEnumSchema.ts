import { z } from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','name','address','apartmenNumber','deliveryInformation','phone','country']);

export default AddressScalarFieldEnumSchema;
