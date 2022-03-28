import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Mapper, MappingProfile } from '@automapper/core';
import { BaseEntity } from '@nx-with-chau-tran/api/shared-data-access-entities';
import { BaseDto } from '@nx-with-chau-tran/api/shared-data-access-dtos';

@Injectable()
export class BaseProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      mapper.createMap(BaseEntity, BaseDto);
    };
  }
}
