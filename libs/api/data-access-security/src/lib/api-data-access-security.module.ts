import { Module } from '@nestjs/common';
import { ApiDataAccessAuthModule } from '@nx-angular-nest/api/data-access-auth';
import { ApiDataAccessUserModule } from '@nx-angular-nest/api/data-access-user';
import { SecurityService } from './security.service';

@Module({
  imports: [ApiDataAccessAuthModule, ApiDataAccessUserModule],
  providers: [SecurityService],
  exports: [SecurityService],
})
export class ApiDataAccessSecurityModule {}
