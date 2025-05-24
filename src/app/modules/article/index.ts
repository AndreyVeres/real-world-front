import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleListComponent } from './pages/article-list/article-list.component';

export const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },

  {
    path: 'article/:slug',
    component: ArticleDetailsComponent,
  },
];
