/*
  Warnings:

  - Added the required column `product_id` to the `Favourites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `favourites` ADD COLUMN `product_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Favourites` ADD CONSTRAINT `Favourites_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
