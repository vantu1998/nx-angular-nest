import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserEntity } from '@nx-with-chau-tran/api/shared-data-access-entities';
import { EntityRepository } from '@mikro-orm/core';
import { RegisterParamsDto } from '@nx-with-chau-tran/api/shared-data-access-dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: EntityRepository<UserEntity>
  ) {}

  async findByUsername(username: string) {
    try {
      return await this.userRepository.findOneOrFail({ username });
    } catch (e) {
      throw new InternalServerErrorException(e, 'failed - find by username');
    }
  }

  async findById(id: string): Promise<UserEntity> {
    try {
      return await this.userRepository.findOneOrFail({ id });
    } catch (e) {
      throw new InternalServerErrorException(e, 'failed - find by user id');
    }
  }

  async create(dto: RegisterParamsDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(dto);
      await this.userRepository.persistAndFlush(newUser);
      return newUser;
    } catch (e) {
      throw new InternalServerErrorException(e, 'failed - create user');
    }
  }
}
