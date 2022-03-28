import { BaseDto } from '../base.dto';
import { UserRole } from '@nx-with-chau-tran/api/shared-data-access-entities';
import { AutoMap } from '@automapper/classes';

export class AuthUserDto extends BaseDto {
  @AutoMap()
  username!: string;

  @AutoMap()
  email!: string;

  @AutoMap({ typeFn: () => String })
  role!: UserRole;
}
