import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleDto } from './dto/article.dto';
import { ArticleRepository } from '../domain/repository/article.repository';

@Injectable()
export class ArticleApplicationService {
  public constructor(private articleRepository: ArticleRepository) {}

  public fetchAllArticlesForDisplay(): Observable<ArticleDto[]> {
    return this.articleRepository
      .getAll()
      .pipe(map(({ articles }) => articles.map(ArticleDto.fromDomain)));
  }
}
