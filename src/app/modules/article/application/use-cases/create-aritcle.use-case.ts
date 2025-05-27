import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, first, map, shareReplay, take, tap } from 'rxjs/operators';
import { ArticleRepository } from '../../domain/repository/article.repository';
import { CreateArticleDto } from '../dto/article.dto';
import { ArticleEntity } from '../../domain/model/article.entity';
import { ArticleMapper } from '../../infrastructure/article.mapper';
import { Router } from '@angular/router';
import { NotificationService } from '@app/modules/shared/services/notification.service';

@Injectable()
export class CreateArticleUseCase {
  private readonly articleRepository = inject(ArticleRepository);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);

  public execute(dto: CreateArticleDto): Observable<ArticleEntity> {
    try {
      return this.articleRepository.create(dto).pipe(
        map(({ article }) => ArticleMapper.toEntity(article)),
        tap(({ slug }) => {
          this.router.navigate(['article/', slug.value]);
          this.notificationService.success('Article created.');
        }),
        catchError((error) => {
          console.error('Error in CreateArticleUseCase during repository call:', error);
          return throwError(() => new Error('Failed to CreateArticleUseCase via repository.'));
        }),
      );
    } catch (domainError: any) {
      console.error('Domain validation error in CreateArticleUseCase:', domainError.message);
      return throwError(() => new Error(`Validation failed: ${domainError.message}`));
    }
  }
}
