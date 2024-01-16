/*
  Warnings:

  - You are about to drop the column `averagePickupTime` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "apartmenNumber" DROP NOT NULL,
ALTER COLUMN "deliveryInformation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "averagePickupTime",
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "bromatology" DROP NOT NULL,
ALTER COLUMN "mapCoordinates" DROP NOT NULL,
ALTER COLUMN "shippingCost" DROP NOT NULL;
