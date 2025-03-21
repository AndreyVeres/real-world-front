import { Route } from '@angular/router';

export const articleRoute: Route = {
  path: 'article/:name',
  loadComponent: () =>
    import('./ui/article/article.component').then((c) => c.ArticleComponent),
};
