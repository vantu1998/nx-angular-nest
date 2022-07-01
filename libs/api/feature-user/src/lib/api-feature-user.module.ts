import {Module} from '@nestjs/common';
import {ApiDataAccessUserModule} from '@nx-angular-nest/api/data-access-user';

@Module({
  imports: [ApiDataAccessUserModule]
})
export class ApiFeatureUserModule {
}
