import { ArticleDto } from '../application/dto/article.dto';
import { ArticleEntity } from '../domain/model/article.entity';

export class ArticleMapper {
  public static toEntity(articleDto: ArticleDto): ArticleEntity {
    const { id, slug, title, description, tagList, createdAt, updatedAt, favorited, favoritesCount, author } = articleDto;
    return ArticleEntity.reconstitute(id, slug, title, description, tagList, createdAt, updatedAt, favorited, favoritesCount, author);
  }
}
