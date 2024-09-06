import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', // Địa chỉ MySQL
      port: 3306, // Cổng MySQL mặc định
      username: 'root', // Tên người dùng MySQL
      password: '123456789', // Mật khẩu của MySQL
      database: 'products', // Tên cơ sở dữ liệu
      entities: [Products], // Các entity trong dự án
      synchronize: true, // Chỉ dùng trong development, tự động sync schema
    }),
    TypeOrmModule.forFeature([Products]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
