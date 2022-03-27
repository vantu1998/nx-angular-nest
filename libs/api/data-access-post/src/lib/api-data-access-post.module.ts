import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {PostEntity} from '@nx-with-chau-tran/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([PostEntity])]
})
export class ApiDataAccessPostModule {
}
