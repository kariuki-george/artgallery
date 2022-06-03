import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  //Auth stuff
  async register(user) {
    try {
      const res = await axios.post(
        'https://artlive2.herokuapp.com/users/',
        user,
      );
      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async login(user) {
    try {
      const res = await axios.post(
        'https://artlive2.herokuapp.com/login',
        user,
      );
      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async getUsers() {
    try {
      const res = await axios.get('https://artlive2.herokuapp.com/users/');
      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async getProducts() {
    try {
      const res = await axios.get('https://artlive2.herokuapp.com/products/');
      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async getProduct(id) {
    try {
      const res = await axios.get(
        `https://artlive2.herokuapp.com/getproductid/${parseInt(id)}`,
      );
      return res.data[0];
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async createProduct(product) {
    try {
      const res = await axios.post(
        'https://artlive2.herokuapp.com/products/',
        product,
      );
      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async addToCart(product) {
    try {
      const res = await axios.post(
        'https://artlive2.herokuapp.com/cart/',
        product,
      );
      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
  async getCartByUserId(id) {
    try {
      const res = await axios.get('https://artlive2.herokuapp.com/cart/' + id);

      return res.data;
    } catch (error) {
      throw new BadRequestException(error.data);
    }
  }
}
