import { Injectable, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticleRepository } from '../../domain/repository/article.repository';
import { ArticleMapper } from '../../infrastructure/article.mapper';
import { Router } from '@angular/router';

@Injectable()
export class GetSingleArticlesUseCase {
  private readonly articleRepository = inject(ArticleRepository);
  private readonly router = inject(Router);

  public execute(slug: string) {
    try {
      return this.articleRepository.getArticleBySlug(slug).pipe(
        map(({ article }) => ArticleMapper.toEntity(article)),
        catchError((error) => {
          console.error('Error in GetSingleArticlesUseCase during repository call:', error);
          this.router.navigate(['/']);
          return throwError(() => new Error('Failed to GetSingleArticlesUseCase repository.'));
        }),
      );
    } catch (domainError: any) {
      console.error('Domain validation error in GetSingleArticlesUseCase:', domainError.message);
      return throwError(() => new Error(`Validation failed: ${domainError.message}`));
    }
  }
}
