import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './presentation/pages/article-details/article-details.component';
import { ArticleListComponent } from './presentation/pages/article-list/article-list.component';
import { ArticleApplicationService } from './application/article-application.service';
import { ArticleFacade } from './application/article.facade';
import { ArticleRepository } from './domain/repository/article.repository';
import { ArticleHttpRepository } from './infrastructure/article-http.repository';
import { provideEffects } from '@ngrx/effects';
import { ArticleEffects } from './presentation/store/effects/article.effects';
import { ArticleListResolver } from './presentation/resolvers/article-list.resolver';
import { provideState } from '@ngrx/store';
import {
  articleFeatureKey,
  articleReducer,
} from './presentation/store/reducers/article.reducer';

export const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
    resolve: { state: ArticleListResolver },
    providers: [
      ArticleListResolver,
      ArticleApplicationService,
      ArticleFacade,
      { provide: ArticleRepository, useClass: ArticleHttpRepository },
      provideEffects(ArticleEffects),
      provideState(articleFeatureKey, articleReducer),
    ],
  },

  {
    path: 'article/:slug',
    component: ArticleDetailsComponent,
  },
];
