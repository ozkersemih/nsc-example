import { Injectable } from '@nestjs/common';
import { CreateProductBody, GetProductsQuery } from './product.types';

@Injectable()
export class AppService {
  createProduct(body: CreateProductBody): string {
    return `${body.name} product was created`;
  }

  getProducts(query: GetProductsQuery): string {
    return `Product was fetched and listed`;
  }
}
