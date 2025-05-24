import { Observable } from 'rxjs';
import { ArticleEntity } from '../model/article.entity';

export abstract class ArticleRepository {
  public abstract getAll(): Observable<{
    articles: ArticleEntity[];
    articlesCount: number;
  }>;
}
