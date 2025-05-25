// import { ArticleDto } from '../application/dto/article.dto';
// import { ArticleEntity } from '../domain/model/article.entity';

// export class ArticleMapper {
//   public static toEntity(dto: ArticleDto): ArticleEntity {
//     return ArticleEntity.reconstitute(
//       dto.id,
//       dto.slug,
//       dto.title,
//       dto.description,
//       dto.tagList
//     );
//   }

//   public static toDto(entity: ArticleEntity): ArticleDto {
//     return {
//       id: entity.id,
//       title: entity.title.value,
//       description: entity.description.value,
//       tagList: entity.tagList.value,
//       slug: entity.slug.value,
//     };
//   }
// }
