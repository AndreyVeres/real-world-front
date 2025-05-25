import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ArticleApplicationService } from '@app/modules/article/application/article-application.service';
import {
  ArticleApiActions,
  ArticlePageActions,
} from '../actions/article.actions';
import { CreateArticleUseCase } from '@app/modules/article/application/use-cases/create-aritcle.use-case';

@Injectable()
export class ArticleEffects {
  private readonly actions$ = inject(Actions);
  private readonly articleAppService = inject(ArticleApplicationService);
  private readonly createArticleUseCase = inject(CreateArticleUseCase);

  public createArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlePageActions.createArticle),
      mergeMap(({ articleDto }) =>
        this.createArticleUseCase.execute(articleDto).pipe(
          map((article) => ArticleApiActions.createArticleSuccess({ article })),
          catchError((error) =>
            of(ArticleApiActions.loadAllArticlesFailure({ error }))
          )
        )
      )
    )
  );

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
