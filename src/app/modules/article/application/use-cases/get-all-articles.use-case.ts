import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticleRepository } from '../../domain/repository/article.repository';
import { ArticleMapper } from '../../infrastructure/article.mapper';

@Injectable()
export class GetAllArticlesUseCase {
  private readonly articleRepository = inject(ArticleRepository);

  public execute() {
    try {
      return this.articleRepository.getAll().pipe(
        map(({ articles, articlesCount }) => articles.map(ArticleMapper.toEntity)),
        catchError((error) => {
          console.error('Error in GetAllArticlesUseCase during repository call:', error);
          return throwError(() => new Error('Failed to GetAllArticlesUseCase repository.'));
        }),
      );
    } catch (domainError: any) {
      console.error('Domain validation error in GetAllArticlesUseCase:', domainError.message);
      return throwError(() => new Error(`Validation failed: ${domainError.message}`));
    }
  }
}
