import { Module } from '@nestjs/common';
import { ApiDataAccessUserModule } from '@nx-with-chau-tran/api/data-access-user';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthConfig, authConfig } from '@nx-with-chau-tran/api/utils-config';
import { JwtStrategyService } from './jwt-strategy.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [authConfig.KEY],
      useFactory: ({ jwtExpired, jwtSecret }: AuthConfig) => ({
        secret: jwtSecret,
        signOptions: {
          expiresIn: jwtExpired,
        },
      }),
    }),
    ApiDataAccessUserModule,
  ],
  providers: [AuthService, JwtStrategyService],
  exports: [AuthService],
})
export class ApiDataAccessAuthModule {}
