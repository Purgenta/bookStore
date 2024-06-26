var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude, Expose } from "class-transformer";
export class ProductDTO {
}
__decorate([
    Exclude(),
    __metadata("design:type", Boolean)
], ProductDTO.prototype, "is_selling", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "id", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], ProductDTO.prototype, "title", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "price", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "quantity", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "page_number", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], ProductDTO.prototype, "publishing_date", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "productImages", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "productType", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "genre", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], ProductDTO.prototype, "image_url", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "avgRating", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "sale", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "author", void 0);
__decorate([
    Expose(),
    __metadata("design:type", String)
], ProductDTO.prototype, "description", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "publisher", void 0);
__decorate([
    Expose(),
    __metadata("design:type", Object)
], ProductDTO.prototype, "similiarProducts", void 0);
//# sourceMappingURL=ProductDTO.js.map