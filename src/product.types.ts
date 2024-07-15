import { ApiProperty } from '@nestjs/swagger';
class LegalInformation {
  @ApiProperty({
    type: String,
    example: 'TR',
    description: 'Country of product',
  })
  country: string;
  @ApiProperty({
    type: String,
    example: '111-223',
    description: 'Product code of product',
  })
  productCode: number;
}

export class CreateProductBody {
  @ApiProperty({
    type: String,
    example: 'My Product',
  })
  name: string;

  price: number;

  @ApiProperty({
    type: String,
    example: 'example-url',
    description: 'Price of product',
  })
  imageUrl: string;

  @ApiProperty({
    type: LegalInformation,
    description: 'Legal information of product',
  })
  legalInformation: LegalInformation;
}
export class GetProductsQuery {
  @ApiProperty({ type: Number, example: 1, description: 'Page index' })
  page: number;

  @ApiProperty({ type: Number, example: 10, description: 'Pagination limit' })
  limit: number;
}
