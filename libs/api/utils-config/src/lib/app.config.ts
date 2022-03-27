import {ConfigType, registerAs} from '@nestjs/config';
import {Inject} from '@nestjs/common';

export const appConfig = registerAs('app', () => ({
  host: process.env.APP_HOST || 'localhost',
  port: Number(process.env.APP_PORT) || 3333,
  schema: process.env.APP_SCHEMA || 'http',
  get domain() {
    return `${this.schema}://${this.host}:${this.port}`;
  }
}));

export type AppConfig = ConfigType<typeof appConfig>;
export const InjectAppConfig = () => Inject(appConfig.KEY);
