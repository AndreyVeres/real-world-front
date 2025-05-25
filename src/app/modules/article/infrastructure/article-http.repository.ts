import { inject, Injectable } from '@angular/core';
import { API_ROUTES } from '@shared/const/api.routes';
import { Observable } from 'rxjs';
import { ArticleRepository } from '../domain/repository/article.repository';
import { HttpClient } from '@angular/common/http';
import { env } from 'env';
import { MultipleArticleResponse } from '../application/dto/article.dto';

@Injectable()
export class ArticleHttpRepository implements ArticleRepository {
  private readonly http = inject(HttpClient);

  public getAll(): Observable<MultipleArticleResponse> {
    return this.http.get<MultipleArticleResponse>(
      env.API_PATH + API_ROUTES.ARTICLE
    );
  }
}
