import { Observable } from 'rxjs';
import { Article } from '../entity/article.entity';

export abstract class ArticleRepositoryService {
  abstract getAll(): Observable<Article[]>;
}
