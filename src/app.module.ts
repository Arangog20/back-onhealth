import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './persistence/db-config';
import { PersistenceModule } from './persistence/persistence.module';
import { ChildrenModule } from './children/children.module';
import { VaccineModule } from './vaccine/vaccine.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
      envFilePath: '.env',
    }),
    PersistenceModule,
    ChildrenModule,
    VaccineModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
