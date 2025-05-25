import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ArticleApplicationService } from '@app/modules/article/application/article-application.service';
import {
  ArticleApiActions,
  ArticlePageActions,
} from '../actions/article.actions';

@Injectable()
export class ArticleEffects {
  public constructor(
    private actions$: Actions,
    private articleAppService: ArticleApplicationService
  ) {}

  public loadAllArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlePageActions.loadAllArticles),
      mergeMap(() =>
        this.articleAppService.getAll().pipe(
          map(({ articles, articlesCount }) =>
            ArticleApiActions.loadAllArticlesSuccess({ articles })
          ),
          catchError((error) =>
            of(ArticleApiActions.loadAllArticlesFailure({ error }))
          )
        )
      )
    )
  );
}
