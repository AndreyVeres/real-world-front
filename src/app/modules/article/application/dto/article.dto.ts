import { ArticleEntity } from '../../domain/model/article.entity';

export interface CreateArticleDto {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
}

export interface IArticleDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  tagList: string[];
}

export class ArticleDto implements IArticleDto {
  public constructor(
    public id: string,
    public slug: string,
    public title: string,
    public description: string,
    public tagList: string[]
  ) {}

  public static fromDomain(article: ArticleEntity): ArticleDto {
    return new ArticleDto(
      article.id,
      article.slug.value,
      article.title.value,
      article.description.value,
      article.tagList.getTags()
    );
  }
}
