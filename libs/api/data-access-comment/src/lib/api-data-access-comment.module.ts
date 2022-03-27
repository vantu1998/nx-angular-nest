import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {CommentEntity} from '@nx-with-chau-tran/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([CommentEntity])]
})
export class ApiDataAccessCommentModule {
}
