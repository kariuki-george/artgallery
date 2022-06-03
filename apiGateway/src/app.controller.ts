import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private service: AppService) {}
  @Get('/users')
  async getAllusers() {
    return await this.service.getUsers();
  }
  @Post('/auth/register')
  async register(@Body() user) {
    return await this.service.register(user);
  }
  @Post('/auth/login')
  async login(@Body() user) {
    return await this.service.login(user);
  }

  @Get('/products')
  async getProducts() {
    return await this.service.getProducts();
  }
  @Get('/products/:id')
  async getProduct(@Param('id') id) {
    return await this.service.getProduct(id);
  }
  @Post('/products')
  async createProductProducts(@Body() product) {
    return await this.service.createProduct(product);
  }
  @Post('/cart')
  async addToCart(@Body() product) {
    return await this.service.addToCart(product);
  }
  @Get('/cart/:id')
  async getCartByUserId(@Param('id') id) {

    return await this.service.getCartByUserId(id);
  }
}
