import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, TransactionModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
