import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {appConfig, authConfig, dbConfig} from '@nx-angular-nest/api/utils-config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig, authConfig, dbConfig]
  })],
})
export class ApiFeatureConfigModule {
}
