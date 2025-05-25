export interface ArticleDto {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly tagList: string[];
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
