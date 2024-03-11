import { Module } from '@nestjs/common';
import { StaticModule } from './modules/static/static.module';
import { DynamicModule } from './modules/dynamic/dynamic.module';

//Appel des 2 modules static et dynamic développer
@Module({
    imports: [StaticModule, DynamicModule],
})
export class AppModule {}