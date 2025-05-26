import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleRepository } from '../domain/repository/article.repository';
import { ArticleEntity } from '../domain/model/article.entity';
import { MultipleArticleResponse } from './dto/article.dto';

@Injectable()
export class ArticleApplicationService {
  public constructor(private articleRepository: ArticleRepository) {}

  public getAll(): Observable<{
    articles: ArticleEntity[];
    articlesCount: number;
  }> {
    return this.articleRepository.getAll().pipe(map(this.mapToDomain));
  }

  public getPopularTags() {
    return this.articleRepository;
  }

  private mapToDomain(response: MultipleArticleResponse) {
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
