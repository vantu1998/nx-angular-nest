import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload';
import {
  AuthConfig,
  InjectAuthConfig,
} from '@nx-angular-nest/api/utils-config';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @InjectAuthConfig() { jwtSecret }: AuthConfig,
    private authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: JwtPayload, done: VerifiedCallback): Promise<void> {
    const user = await this.authService.validateUser(payload);
    if (user == null) {
      return done(
        new UnauthorizedException(payload, 'failed - passport validation'),
        null
      );
    }

    return done(null, user);
  }
}
