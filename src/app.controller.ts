import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateProductBody, GetProductsQuery } from './product.types';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    description: 'This endpoint is responsible for creating product',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  create(@Body() body: CreateProductBody) {
    return this.appService.createProduct(body);
  }

  @Get('')
  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    description: 'This endpoint is responsible for getting products',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  getProducts(@Query() query: GetProductsQuery) {
    return this.appService.getProducts(query);
  }

  @Get('')
  @ApiResponse({
    status: HttpStatus.CREATED,
  })
  @ApiOperation({
    description:
      'This endpoint is responsible for getting products by given seller id.',
  })
  @ApiParam({
    name: 'sellerId',
    description: 'Seller Id',
    example: '1111-2222-qqaa-bbb-333',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Server Error',
  })
  getSellerProducts(@Param('sellerId2') sellerId: string) {
    //return this.appService.getProducts(query);
  }
}
