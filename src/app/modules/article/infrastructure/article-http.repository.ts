import { inject, Injectable } from '@angular/core';
import { API_ROUTES } from '@app/modules/shared/const/api.routes';
import { Observable } from 'rxjs';
import { ArticleRepository } from '../domain/repository/article.repository';
import { HttpClient } from '@angular/common/http';
import { env } from 'env';
import { CreateArticleDto, MultipleArticleResponse, SingleArticleResponse } from '../application/dto/article.dto';

@Injectable()
export class ArticleHttpRepository implements ArticleRepository {
  public getArticleBySlug(slug: string): Observable<SingleArticleResponse> {
    return this.http.get<SingleArticleResponse>(env.API_PATH + API_ROUTES.ARTICLE.replace(':slug', slug));
  }
  private readonly http = inject(HttpClient);

  public getAll(): Observable<MultipleArticleResponse> {
    return this.http.get<MultipleArticleResponse>(env.API_PATH + API_ROUTES.ARTICLES);
  }

  public getPopularTags() {
    return this.http.get<{ tags: string[] }>(env.API_PATH + API_ROUTES.TAGS);
  }

  public create(article: CreateArticleDto): Observable<SingleArticleResponse> {
    return this.http.post<SingleArticleResponse>(env.API_PATH + API_ROUTES.CREATE_ARTICLE, { article });
  }
}
