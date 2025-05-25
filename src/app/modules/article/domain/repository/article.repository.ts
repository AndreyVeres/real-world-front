import { Observable } from 'rxjs';
import { MultipleArticleResponse } from '../../application/dto/article.dto';

export abstract class ArticleRepository {
  public abstract getAll(): Observable<MultipleArticleResponse>;
}
