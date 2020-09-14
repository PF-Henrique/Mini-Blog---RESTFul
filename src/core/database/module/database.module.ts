import { Module } from '@nestjs/common';
import { databaseProviders } from '../middlewares/database.providers';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}
