import {Module} from '@nestjs/common';
import {ApiDataAccessCommentModule} from '@nx-with-chau-tran/api/data-access-comment';

@Module({
  imports: [ApiDataAccessCommentModule]
})
export class ApiFeatureCommentModule {
}
