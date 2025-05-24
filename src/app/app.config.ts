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
import { provideStore } from '@ngrx/store';
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
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      connectInZone: true,
    }),
  ],
};
