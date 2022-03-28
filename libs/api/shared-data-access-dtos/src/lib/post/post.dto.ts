import { BaseDto } from '../base.dto';
import { UserInformationDto } from '../user/user-information.dto';
import { CommentDto } from '../comment/comment.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class PostDto extends BaseDto {
  @AutoMap()
  @ApiProperty()
  text!: string;

  @AutoMap({ typeFn: () => UserInformationDto })
  @ApiProperty({ type: () => UserInformationDto })
  author!: UserInformationDto;

  @AutoMap({ typeFn: () => CommentDto })
  @ApiProperty({ type: () => CommentDto, isArray: true })
  comments: CommentDto[] = [];

  @AutoMap({ typeFn: () => Number })
  @ApiProperty({ type: () => Number })
  commentsCount = 0;

  @AutoMap({ typeFn: () => UserInformationDto })
  @ApiProperty({ type: () => UserInformationDto, isArray: true })
  likedBy: UserInformationDto[] = [];

  @AutoMap({ typeFn: () => Number })
  @ApiProperty({ type: () => Number })
  likedCount = 0;
}
