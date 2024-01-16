import { z } from 'zod';

export const RestaurantScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','published','name','description','bromatology','razonSocial','hasDelivery','hasPickUp','mapCoordinates','shippingCost','userId','addressId']);

export default RestaurantScalarFieldEnumSchema;
