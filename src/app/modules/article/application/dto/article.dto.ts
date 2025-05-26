import { UserDto } from '@app/modules/auth/application/dto/user.dto';

export interface ArticleDto {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tagList: string[];

  readonly createdAt: string;
  readonly updatedAt: string;
  readonly favorited: boolean;
  readonly favoritesCount: number;

  readonly author: Omit<UserDto, 'token'>;
}
export interface MultipleArticleResponse {
  readonly articles: ArticleDto[];
  readonly articlesCount: number;
}

export interface SingleArticleResponse {
  readonly article: ArticleDto;
}

export interface CreateArticleDto {
  readonly title: string;
  readonly description: string;
  readonly body: string;
  readonly tagList: string[];
}
