import { UserInformationDto } from '../user/user-information.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TokenResultDto {
  @ApiProperty()
  token!: string;

  @ApiProperty({ type: () => UserInformationDto })
  user!: UserInformationDto;
}
