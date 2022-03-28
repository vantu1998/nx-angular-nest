import { Module } from '@nestjs/common';
import { ApiFeatureConfigModule } from '@nx-with-chau-tran/api/feature-config';
import { AutomapperModule } from '@automapper/nestjs';
import { CamelCaseNamingConvention } from '@automapper/core';
import { mikro } from '@automapper/mikro';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DbConfig, dbConfig } from '@nx-with-chau-tran/api/utils-config';
import { ApiFeaturePostModule } from '@nx-with-chau-tran/api/feature-post';
import { ApiFeatureUserModule } from '@nx-with-chau-tran/api/feature-user';
import { ApiFeatureCommentModule } from '@nx-with-chau-tran/api/feature-comment';
import {
  BaseProfile,
  CommentProfile,
  PostProfile,
  UserProfile,
} from '@nx-with-chau-tran/api/shared-data-access-mappings';

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
    ApiFeatureUserModule,
    ApiFeaturePostModule,
    ApiFeatureCommentModule,
  ],
  providers: [BaseProfile, UserProfile, PostProfile, CommentProfile],
})
export class AppModule {}
