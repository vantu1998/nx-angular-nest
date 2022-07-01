import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostEntity } from '@nx-angular-nest/api/shared-data-access-entities';
import { ApiDataAccessUserModule } from '@nx-angular-nest/api/data-access-user';
import { PostService } from './post.service';

@Module({
  imports: [MikroOrmModule.forFeature([PostEntity]), ApiDataAccessUserModule],
  providers: [PostService],
  exports: [PostService],
})
export class ApiDataAccessPostModule {}
