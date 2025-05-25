export interface ArticleDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  tagList: string[];
}
export interface MultipleArticleResponse {
  articles: ArticleDto[];
  articlesCount: number;
}

export interface SingleArticleResponse {
  article: ArticleDto;
}
