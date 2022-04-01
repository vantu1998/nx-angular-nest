import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {UserEntity} from '@nx-with-chau-tran/api/shared-data-access-entities';
import {UserService} from "./user.service";

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  exports: [UserService]
})
export class ApiDataAccessUserModule {
}
