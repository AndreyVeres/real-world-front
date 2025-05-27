import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';
import { GetSingleArticlesUseCase } from '../../application/use-cases/get-single-article.use-case';

export const SingleArticleResolver = (route: ActivatedRouteSnapshot) => {
  const slug = route.paramMap.get('slug');

  if (!slug) {
    inject(Router).navigate(['/']);
    return EMPTY;
  }

  return inject(GetSingleArticlesUseCase).execute(slug);
};
