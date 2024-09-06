import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()  // @Entity() để đánh dấu class này là một bảng trong DB
export class Products {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  name: string;

  @Column()  
  description: string;

  @Column()  
  price: number;
}