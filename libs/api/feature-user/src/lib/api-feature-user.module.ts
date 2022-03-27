import {Module} from '@nestjs/common';
import {ApiDataAccessUserModule} from '@nx-with-chau-tran/api/data-access-user';

@Module({
  imports: [ApiDataAccessUserModule]
})
export class ApiFeatureUserModule {
}
