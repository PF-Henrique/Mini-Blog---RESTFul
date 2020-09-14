import { User } from './user.entity';
import { USER_REPOSITORY } from '../../core/constrants';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];