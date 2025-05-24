import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ArticleFacade } from '../../application/article.facade';

@Injectable()
export class ArticleListResolver implements Resolve<boolean> {
  public constructor(private articleStoreFacade: ArticleFacade) {}

  public resolve(): Observable<boolean> {
    return this.articleStoreFacade.isLoading$.pipe(
      tap((isLoaded) => !isLoaded && this.articleStoreFacade.loadAllArticles()),
      take(1)
    );
  }
}
