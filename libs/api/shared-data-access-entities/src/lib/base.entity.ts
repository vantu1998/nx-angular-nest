import {Entity, PrimaryKey, Property, SerializedPrimaryKey} from '@mikro-orm/core';
import {ObjectId} from '@mikro-orm/mongodb';
import {AutoMap} from '@automapper/classes';

@Entity({abstract: true})
export class BaseEntity {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  @AutoMap()
  id!: ObjectId;

  @Property()
  @AutoMap({typeFn: () => Date})
  createAt = new Date();

  @Property({onUpdate: () => new Date()})
  @AutoMap({typeFn: () => Date})
  updateAt = new Date();

}
