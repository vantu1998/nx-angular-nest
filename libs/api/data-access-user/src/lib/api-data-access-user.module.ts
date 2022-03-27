import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {UserEntity} from '@nx-with-chau-tran/api/shared-data-access-entities';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])]
})
export class ApiDataAccessUserModule {
}
