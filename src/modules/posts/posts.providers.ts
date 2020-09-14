import { Post } from './post.entity';
import { POST_REPOSITORY } from '../../core/constrants/';

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post,
}];