import {BaseEntity} from './base.entity';
import {Entity, IdentifiedReference, ManyToOne, OptionalProps, Property} from '@mikro-orm/core';
import {AutoMap} from '@automapper/classes';
import {UserEntity} from './user.entity';
import {PostEntity} from './post.entity';

@Entity({collection: 'comments'})
export class CommentEntity extends BaseEntity {
  [OptionalProps]?: 'createAt' | 'updateAt';

  @Property()
  @AutoMap()
  text!: string;

  @ManyToOne(() => UserEntity, {wrappedReference: true})
  @AutoMap({typeFn: () => UserEntity})
  author!: IdentifiedReference<UserEntity, '_id' | 'id'>;

  @ManyToOne(() => PostEntity, {wrappedReference: true})
  @ManyToOne()
  @AutoMap({typeFn: () => PostEntity})
  post!: IdentifiedReference<PostEntity, '_id' | 'id'>;

}
