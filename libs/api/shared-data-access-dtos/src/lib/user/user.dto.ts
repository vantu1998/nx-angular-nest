import { BaseDto } from '../base.dto';
import { UserRole } from '@nx-with-chau-tran/api/shared-data-access-entities';
import { PostDto } from '../post/post.dto';
import { CommentDto } from '../comment/comment.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDto extends BaseDto {
  @AutoMap()
  @ApiProperty()
  username!: string;

  @AutoMap()
  @ApiProperty()
  email!: string;

  @AutoMap({ typeFn: () => String })
  @ApiProperty({ enum: () => UserRole, enumName: 'UserRole' })
  role!: UserRole;

  @AutoMap()
  @ApiPropertyOptional()
  name?: string;

  @AutoMap()
  @ApiPropertyOptional()
  avatarUrl?: string;

  @AutoMap()
  @ApiPropertyOptional()
  bio?: string;

  @AutoMap()
  @ApiPropertyOptional()
  location?: string;

  @AutoMap({ typeFn: () => PostDto })
  @ApiProperty({ type: PostDto, isArray: true })
  posts: PostDto[] = [];

  @AutoMap({ typeFn: () => PostDto })
  @ApiProperty({ type: PostDto, isArray: true })
  liked: PostDto[] = [];

  @AutoMap({ typeFn: () => CommentDto })
  @ApiProperty({ type: CommentDto, isArray: true })
  comments: CommentDto[] = [];
}
