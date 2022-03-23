import {ConfigType, registerAs} from "@nestjs/config";
import {Inject} from "@nestjs/common";

export const authConfig = registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET || 'Secret key',
  jwtExpire: process.env.JWT_EXPIRED || '7d',
  jwtSalt: Number(process.env.JWT_SALT) || 12
}))

export type AuthConfig = ConfigType<typeof authConfig>;
export const InjectAuthConfig = () => Inject(authConfig.KEY);
