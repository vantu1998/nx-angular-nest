import {Module} from '@nestjs/common';
import {ApiDataAccessCommentModule} from '@nx-angular-nest/api/data-access-comment';

@Module({
  imports: [ApiDataAccessCommentModule]
})
export class ApiFeatureCommentModule {
}
