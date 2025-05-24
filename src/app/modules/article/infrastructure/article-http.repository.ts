import { inject, Injectable } from '@angular/core';
import { API_ROUTES } from '@shared/const/api.routes';
import { map, Observable } from 'rxjs';
import { ArticleEntity } from '../domain/model/article.entity';
import { ArticleRepository } from '../domain/repository/article.repository';
import { HttpClient } from '@angular/common/http';
import { env } from 'env';

interface ArticleInterface {
  id: number;
  slug: string;
  title: string;
  description: string;
  tagList: string[];
}

interface ApiResponse {
  articles: ArticleInterface[];
  articlesCount: number;
}

@Injectable()
export class ArticleHttpRepository extends ArticleRepository {
  private readonly http = inject(HttpClient);

  public getAll(): Observable<{
    articles: ArticleEntity[];
    articlesCount: number;
  }> {
    return this.http
      .get<ApiResponse>(env.API_PATH + API_ROUTES.ARTICLE)
      .pipe(map(this.mapToDomain));
  }

  private mapToDomain(response: {
    articles: ArticleInterface[];
    articlesCount: number;
  }) {
    return {
      ...response,
      articles: response.articles.map((article) =>
        ArticleEntity.reconstitute(
          String(article.id),
          article.slug,
          article.title,
          article.description,
          article.tagList
        )
      ),
    };
  }
}
