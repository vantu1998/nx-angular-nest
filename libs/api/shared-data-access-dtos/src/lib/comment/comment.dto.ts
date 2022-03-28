import { BaseDto } from '../base.dto';
import { UserInformationDto } from '../user/user-information.dto';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CommentDto extends BaseDto {
  @AutoMap()
  @ApiProperty()
  text!: string;

  @AutoMap({ typeFn: () => UserInformationDto })
  @ApiProperty({ type: UserInformationDto })
  author!: UserInformationDto;

  @AutoMap()
  @ApiProperty()
  postId!: string;
}
