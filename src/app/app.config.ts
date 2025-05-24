import {
  ApplicationConfig,
  provideAppInitializer,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authRoutes, JwtInterceptor } from '@features/auth';
import { appInitializer } from './app.initializer';
import { profileRoute } from '@pages/profile';
import { editorRoute } from '@pages/editor';
import { settingsRoute } from '@pages/settings';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { articlesReducer } from './modules/article/store/reducers/article.reducer';

import { ArticleEffects } from './modules/article/store/effects/article.effects';
import { ArticleRepositoryService } from './modules/article/services/article.repository';
import { ArticleService } from './modules/article/services/article.service';
import { articleRoutes } from './modules/article';

export const routes: Routes = [
  profileRoute,
  ...articleRoutes,
  ...authRoutes,
  editorRoute,
  settingsRoute,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([JwtInterceptor])),
    provideAppInitializer(appInitializer),

    provideStore({
      articles: articlesReducer,
    }),
    provideEffects([ArticleEffects]),

    {
      provide: ArticleRepositoryService,
      useClass: ArticleService,
    },

    // {
    //   provide:Ng
    // }

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      connectInZone: true,
    }),
  ],
};
