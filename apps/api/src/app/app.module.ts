import { Module } from '@nestjs/common';
import { ApiFeatureConfigModule } from '@nx-angular-nest/api/feature-config';
import { AutomapperModule } from '@automapper/nestjs';
import { CamelCaseNamingConvention } from '@automapper/core';
import { mikro } from '@automapper/mikro';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DbConfig, dbConfig } from '@nx-angular-nest/api/utils-config';
import { ApiFeaturePostModule } from '@nx-angular-nest/api/feature-post';
import { ApiFeatureUserModule } from '@nx-angular-nest/api/feature-user';
import { ApiFeatureCommentModule } from '@nx-angular-nest/api/feature-comment';
import {
  BaseProfile,
  CommentProfile,
  PostProfile,
  UserProfile,
} from '@nx-angular-nest/api/shared-data-access-mappings';
import { ApiFeatureAuthModule } from '@nx-angular-nest/api/feature-auth';
import { ApiFeatureSecurityModule } from '@nx-angular-nest/api/feature-security';

@Module({
  imports: [
    AutomapperModule.forRoot({
      singular: true,
      options: [
        {
          name: 'mapper',
          pluginInitializer: mikro(),
          namingConventions: new CamelCaseNamingConvention(),
        },
      ],
    }),

    MikroOrmModule.forRootAsync({
      inject: [dbConfig.KEY],
      useFactory: (dbConfig: DbConfig) => ({
        dbName: dbConfig.dbName,
        clientUrl: dbConfig.uri,
        autoLoadEntities: true,
        type: 'mongo',
      }),
    }),
    ApiFeatureConfigModule,
    ApiFeatureAuthModule,
    ApiFeatureUserModule,
    ApiFeaturePostModule,
    ApiFeatureCommentModule,
    ApiFeatureSecurityModule,
  ],
  providers: [BaseProfile, UserProfile, PostProfile, CommentProfile],
})
export class AppModule {}
