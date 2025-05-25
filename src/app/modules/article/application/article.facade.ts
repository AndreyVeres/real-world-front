import { inject, Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ArticlePageActions } from '../presentation/store/actions/article.actions';
import {
  selectAllArticles,
  selectArticlesLoading,
} from '../presentation/store/selectors/article.selectors';

@Injectable()
export class ArticleFacade {
  private readonly store = inject(Store);
  public readonly articles$ = this.store.pipe(select(selectAllArticles));
  public readonly isLoading$ = this.store.pipe(select(selectArticlesLoading));

  public loadAllArticles(): void {
    this.store.dispatch(ArticlePageActions.loadAllArticles());
  }
}
