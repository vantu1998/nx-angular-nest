import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile } from '@automapper/core';
import {
  BaseEntity,
  UserEntity,
} from '@nx-angular-nest/api/shared-data-access-entities';
import {
  AuthUserDto,
  BaseDto,
  UserDto,
  UserInformationDto,
} from '@nx-angular-nest/api/shared-data-access-dtos';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      const baseMapping = mapper.getMapping(BaseEntity, BaseDto);
      mapper.createMap(UserEntity, UserDto, { extends: [baseMapping] });
      mapper.createMap(UserEntity, UserInformationDto, {
        extends: [baseMapping],
      });
      mapper.createMap(UserEntity, AuthUserDto, {
        extends: [baseMapping],
      });
    };
  }
}
