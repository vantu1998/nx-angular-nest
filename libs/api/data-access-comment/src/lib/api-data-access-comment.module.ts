import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {CommentEntity} from '@nx-angular-nest/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([CommentEntity])]
})
export class ApiDataAccessCommentModule {
}
