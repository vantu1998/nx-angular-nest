import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiErrors,
  CurrentUser,
} from '@nx-angular-nest/api/shared-utils-decorators';
import { PostService } from '@nx-angular-nest/api/data-access-post';
import {
  AuthUserDto,
  PostDto,
} from '@nx-angular-nest/api/shared-data-access-dtos';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Post')
@ApiErrors()
@ApiBearerAuth()
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  @ApiOkResponse({ type: PostDto, isArray: true })
  get(): Promise<PostDto[]> {
    return this.postService.findPosts();
  }

  @Get(':id')
  @ApiOkResponse({ type: PostDto })
  getPost(@Param('id') postId: string): Promise<PostDto> {
    return this.postService.findPostDetail(postId);
  }

  @Post()
  @UseGuards(AuthGuard())
  @ApiBody({
    schema: { properties: { text: { type: 'string' } }, required: ['text'] },
  })
  @ApiCreatedResponse({ type: PostDto })
  create(
    @Body('text') text: string,
    @CurrentUser() user: AuthUserDto
  ): Promise<PostDto> {
    return this.postService.createPost(user.id, text);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiOkResponse()
  delete(
    @Param('id') postId: string,
    @CurrentUser() user: AuthUserDto
  ): Promise<void> {
    return this.postService.deletePost(user.id, postId);
  }

  @Put(':id/like')
  @UseGuards(AuthGuard())
  @ApiOkResponse({ type: PostDto })
  like(
    @Param('id') postId: string,
    @CurrentUser() user: AuthUserDto
  ): Promise<PostDto> {
    return this.postService.like(user.id, postId);
  }

  @Put(':id/unlike')
  @UseGuards(AuthGuard())
  @ApiOkResponse({ type: PostDto })
  unlike(
    @Param('id') postId: string,
    @CurrentUser() user: AuthUserDto
  ): Promise<PostDto> {
    return this.postService.unlike(user.id, postId);
  }
}
