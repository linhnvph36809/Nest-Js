import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Products } from './products.entity';
import IProduct from './IProduct';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<Products[]> {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Products> {
    return this.appService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    createProductsDto: IProduct,
  ): Promise<Products> {
    return this.appService.createUser(
      createProductsDto.name,
      createProductsDto.description,
      createProductsDto.price,
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTodoDto: IProduct,
  ): Promise<Products> {
    return this.appService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appService.remove(+id);
  }
}
