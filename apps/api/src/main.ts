import {Logger} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import {AppConfig, appConfig} from '@nx-with-chau-tran/api/utils-config';
import helmet from 'helmet';
import * as compression from 'compression';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<AppConfig>(appConfig.KEY);

  app.enableCors();
  app.enableShutdownHooks();

  app.use(helmet());
  app.use(compression());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Post API')
    .setDescription('API documentation for Post')
    .setVersion('1.0.0')
    .addServer(config.domain, 'Development API')
    .addBearerAuth()
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup(`${globalPrefix}/docs`, app, swaggerDoc, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true
    }
  });
  await app.listen(config.port, () => {
    Logger.log(
      `Listening at: ${config.domain}/${globalPrefix}`,
      'NestApplication'
    );
    Logger.log(
      `Swagger Docs enabled at: ${config.domain}/${globalPrefix}/docs`,
      'NestApplication'
    );
  });
}

bootstrap().then();
