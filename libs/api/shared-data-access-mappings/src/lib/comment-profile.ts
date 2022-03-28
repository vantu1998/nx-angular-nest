import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, MappingProfile } from '@automapper/core';
import {
  BaseEntity,
  CommentEntity,
} from '@nx-with-chau-tran/api/shared-data-access-entities';
import {
  BaseDto,
  CommentDto,
} from '@nx-with-chau-tran/api/shared-data-access-dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile(): MappingProfile {
    return (mapper) => {
      const baseMapping = mapper.getMapping(BaseEntity, BaseDto);
      mapper.createMap(CommentEntity, CommentDto, { extends: [baseMapping] });
    };
  }
}
