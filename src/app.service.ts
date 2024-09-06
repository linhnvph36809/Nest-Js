import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';
import IProduct from './IProduct';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  findOne(id: any): Promise<Products> {
    return this.productsRepository.findOneBy(id);
  }

  createUser(
    name: string,
    description: string,
    price: number,
  ): Promise<Products> {
    const products = this.productsRepository.create({
      name,
      description,
      price,
    });
    return this.productsRepository.save(products);
  }

  async update(id: number, updateTodoDto: IProduct): Promise<Products> {
    const todo = await this.productsRepository.findOneBy({ id });
    if (!todo) {
      throw new Error('Todo not found');
    }

    Object.assign(todo, updateTodoDto);
    return await this.productsRepository.save(todo);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
