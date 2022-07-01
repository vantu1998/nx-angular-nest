import { Module } from '@nestjs/common';
import { ApiDataAccessSecurityModule } from '@nx-angular-nest/api/data-access-security';
import { SecurityController } from './security.controller';

@Module({
  imports: [ApiDataAccessSecurityModule],
  controllers: [SecurityController],
})
export class ApiFeatureSecurityModule {}
