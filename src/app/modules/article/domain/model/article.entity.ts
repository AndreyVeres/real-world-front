import { Entity } from '@app/modules/shared/entity';
import { ArticleDescription } from './value-objects/article-description';
import { ArticleSlug } from './value-objects/article-slug';
import { ArticleTitle } from './value-objects/article-title';
import { ArticleTagList } from './value-objects/artiticle-taglist';

export class ArticleEntity extends Entity {
  override equalsTo(objectToCompare: this): boolean {
    return (
      objectToCompare instanceof ArticleEntity && objectToCompare.id === this.id
    );
  }

  public constructor(
    public title: ArticleTitle,
    public description: ArticleDescription,
    public tagList: ArticleTagList,
    public id?: string,
    public slug?: ArticleSlug
  ) {
    super();
  }

  public static create(
    title: string,
    description: string,
    tagList: string[]
  ): ArticleEntity {
    return new ArticleEntity(
      new ArticleTitle(title),
      new ArticleDescription(description),
      new ArticleTagList(tagList)
    );
  }

  public static reconstitute(
    id: string,
    slug: string,
    title: string,
    description: string,
    tagList: string[]
  ): ArticleEntity {
    return new ArticleEntity(
      new ArticleTitle(title),
      new ArticleDescription(description),
      new ArticleTagList(tagList),
      id,
      new ArticleSlug(slug)
    );
  }
}
