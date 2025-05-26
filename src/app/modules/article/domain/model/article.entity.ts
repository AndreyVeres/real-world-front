import { Entity } from '@app/modules/shared/entity';
import { ArticleDescription } from './value-objects/article-description';
import { ArticleSlug } from './value-objects/article-slug';
import { ArticleTitle } from './value-objects/article-title';
import { ArticleTagList } from './value-objects/artiticle-taglist';
import { UserDto } from '@app/modules/auth/application/dto/user.dto';

export class ArticleEntity extends Entity {
  override equalsTo(objectToCompare: this): boolean {
    return objectToCompare instanceof ArticleEntity && objectToCompare.id === this.id;
  }

  public constructor(
    public title: ArticleTitle,
    public description: ArticleDescription,
    public tagList: ArticleTagList,
    public id: string,
    public slug: ArticleSlug,
    public createdAt: string,
    public updatedAt: string,
    public favorited?: boolean,
    public favoritesCount?: number,
    public author?: Omit<UserDto, 'token'>,
  ) {
    super();
  }

  // public static create(title: string, description: string, tagList: string[]): ArticleEntity {
  //   return new ArticleEntity(new ArticleTitle(title), new ArticleDescription(description), new ArticleTagList(tagList));
  // }

  public static reconstitute(
    id: string,
    slug: string,
    title: string,
    description: string,
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount?: number,
    author?: Omit<UserDto, 'token'>,
  ): ArticleEntity {
    return new ArticleEntity(
      new ArticleTitle(title),
      new ArticleDescription(description),
      new ArticleTagList(tagList),
      id,
      new ArticleSlug(slug),
      createdAt,
      updatedAt,
      favorited,
      favoritesCount,
      author,
    );
  }
}
