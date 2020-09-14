import { Module } from '@nestjs/common';
import { PostsService } from '../services/posts/posts.service';
import { PostsController } from '../controllers/posts/posts.controller';
import { postsProviders } from './posts.providers';

@Module({
    providers: [PostsService, ...postsProviders],
    controllers: [PostsController],
})
export class PostsModule { }