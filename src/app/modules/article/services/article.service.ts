import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services';
import { API_ROUTES } from '@shared/const/api.routes';
import { ArticleRepositoryService } from './article.repository';
import { Observable } from 'rxjs';
import { Article } from '../entity/article.entity';

@Injectable({
  providedIn: 'root',
})
export class ArticleService
  extends ApiService
  implements ArticleRepositoryService
{
  getAll(): Observable<Article[]> {
    return this.get(API_ROUTES.ARTICLE);
  }
}
