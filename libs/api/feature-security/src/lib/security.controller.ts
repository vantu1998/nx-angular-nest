import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  LoginParamsDto,
  RegisterParamsDto,
  TokenResultDto,
} from '@nx-with-chau-tran/api/shared-data-access-dtos';
import { SecurityService } from '@nx-with-chau-tran/api/data-access-security';
import { ApiErrors } from '@nx-with-chau-tran/api/shared-utils-decorators';

@ApiTags('Security')
@ApiErrors()
@Controller('securities')
export class SecurityController {
  constructor(private securityService: SecurityService) {}
  @Post('register')
  @ApiCreatedResponse()
  register(@Body() dto: RegisterParamsDto): Promise<void> {
    return this.securityService.register(dto);
  }
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: TokenResultDto })
  login(@Body() dto: LoginParamsDto): Promise<TokenResultDto> {
    return this.securityService.login(dto);
  }
}
