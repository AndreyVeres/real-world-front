import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services';
import { CreateArticlePayload } from './create-article.types';
import { API_ROUTES } from '@shared/const/api.routes';

@Injectable({
  providedIn: 'root',
})
export class ArticleService extends ApiService {
  createArticle(payload: CreateArticlePayload) {
    return this.post(API_ROUTES.ARTICLE, payload);
  }

  getAll() {
    return this.get(API_ROUTES.ARTICLE);
  }
}
