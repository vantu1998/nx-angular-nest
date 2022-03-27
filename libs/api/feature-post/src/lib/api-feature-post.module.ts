import {Module} from '@nestjs/common';
import {ApiDataAccessPostModule} from '@nx-with-chau-tran/api/data-access-post';

@Module({
  imports: [ApiDataAccessPostModule]
})
export class ApiFeaturePostModule {
}
