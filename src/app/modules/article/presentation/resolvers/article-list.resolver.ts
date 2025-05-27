import { Resolve } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllArticlesUseCase } from '../../application/use-cases/get-all-articles.use-case';
import { ArticleEntity } from '../../domain/model/article.entity';

@Injectable()
export class ArticleListResolver implements Resolve<ArticleEntity[]> {
  private readonly getAllUseCase = inject(GetAllArticlesUseCase);

  public resolve(): Observable<ArticleEntity[]> {
    return this.getAllUseCase.execute();
  }
}
