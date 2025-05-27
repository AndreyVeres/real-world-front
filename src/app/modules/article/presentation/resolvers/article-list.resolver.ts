import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ArticleFacade } from '../../application/article.facade';

@Injectable()
export class ArticleListResolver implements Resolve<boolean> {
  public constructor(private articleFacade: ArticleFacade) {}

  public resolve(): Observable<boolean> {
    return this.articleFacade.isLoading$.pipe(
      tap((isLoaded) => !isLoaded && this.articleFacade.loadAllArticles()),
      take(1)
    );
  }
}
