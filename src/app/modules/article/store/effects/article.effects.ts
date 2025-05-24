import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';

import { ArticleRepositoryService } from '../../services/article.repository';
import {
  loadAllArticles,
  loadAllArticlesFail,
  loadAllArticlesSuccess,
} from '../actions/article.actions';

import { ArticleDto, IArticleDto } from '../../dto/article.dto';
import { Action } from '@ngrx/store';
import { Article } from '../../entity/article.entity';

@Injectable()
export class ArticleEffects {
  private actions$ = inject(Actions);
  private articleRepository = inject(ArticleRepositoryService);

  public loadAllNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllArticles),
      switchMap(() => {
        return this.articleRepository.getAll().pipe(
          map((failureOrNotes) => {
            return this.dispatchFailureOrSuccess(
              failureOrNotes,
              loadAllArticlesFail,
              loadAllArticlesSuccess
            );
          })
        );
      })
    )
  );

  private dispatchFailureOrSuccess(
    failureOrArticles: string | Article[],
    failureAction: (props: { failure: string }) => Action<string>,
    successAction: (props: { articles: IArticleDto[] }) => Action<string>
  ): Action<string> {
    if (Array.isArray(failureOrArticles)) {
      const articles = failureOrArticles.map((article) =>
        ArticleDto.fromDomain(article).toObject()
      );

      return successAction({ articles });
    }

    return failureAction({ failure: 'error load articles' });
  }
}
