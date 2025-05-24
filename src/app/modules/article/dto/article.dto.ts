import { UniqueId } from '@app/modules/shared/uuid';
import { Article } from '../entity/article.entity';
import { ArticleSlug } from '../value-objects/article-slug';
import { ArticleTitle } from '../value-objects/article-title';
import { ArticleDescription } from '../value-objects/article-description';
import { ArticleTagList } from '../value-objects/artiticle-taglist';

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

  static fromDomain(article: Article): ArticleDto {
    return new ArticleDto(
      article.id.value,
      article.slug.value,
      article.title.value,
      article.description.value,
      article.tagList.value
    );
  }

  static fromObject(articleDto: IArticleDto): ArticleDto {
    return new ArticleDto(
      articleDto.id,
      articleDto.slug,
      articleDto.title,
      articleDto.description,
      articleDto.tagList
    );
  }

  toObject(): IArticleDto {
    return JSON.parse(JSON.stringify(this));
  }

  toDomain(): Article {
    return new Article(
      new UniqueId(this.id),
      new ArticleSlug(this.slug),
      new ArticleTitle(this.title),
      new ArticleDescription(this.description),
      new ArticleTagList(this.tagList)
    );
  }
}
