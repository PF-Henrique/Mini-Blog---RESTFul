import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/module/database.module';

// modules imports
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/services/users/users.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/services/auth/auth.service';
import { PostsModule } from './modules/posts/posts.module';
import { PostsService } from './modules/services/posts/posts.service';
import { PostsController } from './modules/controllers/posts/posts.controller';
@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, UsersService, AuthService, PostsService],
})
export class AppModule {}
