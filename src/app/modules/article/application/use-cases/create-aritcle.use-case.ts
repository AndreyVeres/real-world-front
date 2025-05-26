import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticleRepository } from '../../domain/repository/article.repository';
import { CreateArticleDto } from '../dto/article.dto';
import { ArticleEntity } from '../../domain/model/article.entity';

@Injectable()
export class CreateArticleUseCase {
  private readonly articleRepository = inject(ArticleRepository);

  public execute(dto: CreateArticleDto): Observable<ArticleEntity> {
    try {
      return this.articleRepository.create(dto).pipe(
        map(({ article }) => {
          const articleEntity = ArticleEntity.reconstitute(
            article.id,
            article.slug,
            article.title,
            article.description,
            article.tagList
          );

          return articleEntity;
        }),
        catchError((error) => {
          console.error(
            'Error in CreateTodoUseCase during repository call:',
            error
          );
          return throwError(
            () => new Error('Failed to create todo via repository.')
          );
        })
      );
    } catch (domainError: any) {
      console.error(
        'Domain validation error in CreateTodoUseCase:',
        domainError.message
      );
      return throwError(
        () => new Error(`Validation failed: ${domainError.message}`)
      );
    }
  }
}
