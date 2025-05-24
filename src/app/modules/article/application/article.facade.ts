import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticlePageActions } from '../presentation/store/actions/article.actions';
import {
  selectAllArticles,
  selectArticlesLoading,
} from '../presentation/store/selectors/article.selectors';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleFacade {
  public readonly articles$: Observable<ArticleDto[]> = this.store.pipe(
    select(selectAllArticles)
  );

  public readonly isLoading$: Observable<boolean> = this.store.pipe(
    select(selectArticlesLoading)
  );

  public constructor(private store: Store) {}

  public loadAllArticles(): void {
    this.store.dispatch(ArticlePageActions.loadAllArticles());
  }
}
