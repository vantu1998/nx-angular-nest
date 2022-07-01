import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {UserEntity} from '@nx-angular-nest/api/shared-data-access-entities';
import {UserService} from "./user.service";

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  exports: [UserService]
})
export class ApiDataAccessUserModule {
}
