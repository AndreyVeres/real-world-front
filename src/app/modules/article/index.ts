import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './presentation/pages/article-details/article-details.component';
import { ArticleListComponent } from './presentation/pages/article-list/article-list.component';
import { ArticleRepository } from './domain/repository/article.repository';
import { ArticleHttpRepository } from './infrastructure/article-http.repository';
import { ArticleListResolver } from './presentation/resolvers/article-list.resolver';
import { CreateArticleUseCase } from './application/use-cases/create-aritcle.use-case';
import { EditorComponent } from './presentation/pages/editor/editor.component';
import { GetAllArticlesUseCase } from './application/use-cases/get-all-articles.use-case';
import { SingleArticleResolver } from './presentation/resolvers/single-article.resolver';
import { GetSingleArticlesUseCase } from './application/use-cases/get-single-article.use-case';

export const articleRoutes: Routes = [
  {
    path: '',
    providers: [{ provide: ArticleRepository, useClass: ArticleHttpRepository }],
    children: [
      {
        path: '',
        component: ArticleListComponent,
        resolve: {
          articles: ArticleListResolver,
        },
        providers: [ArticleListResolver, GetAllArticlesUseCase],
      },

      {
        path: 'article/:slug',
        component: ArticleDetailsComponent,
        resolve: {
          article: SingleArticleResolver,
        },
        providers: [GetSingleArticlesUseCase],
      },
      {
        path: 'editor',
        component: EditorComponent,
        providers: [CreateArticleUseCase],
      },
    ],
  },
];
