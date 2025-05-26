import { Observable } from 'rxjs';
import { CreateArticleDto, MultipleArticleResponse, SingleArticleResponse } from '../../application/dto/article.dto';

export abstract class ArticleRepository {
  public abstract getAll(): Observable<MultipleArticleResponse>;
  public abstract create(articleDto: CreateArticleDto): Observable<SingleArticleResponse>;
  public abstract getPopularTags(): Observable<{ tags: string[] }>;
}
