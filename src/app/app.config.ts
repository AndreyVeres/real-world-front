import {
  ApplicationConfig,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authRoutes, JwtInterceptor } from '@features/auth';
import { homeRoute } from '@pages/home';
import { appInitializer } from './app.initializer';
import { profileRoute } from '@pages/profile';
import { articleRoute } from '@pages/article';
import { editorRoute } from '@pages/editor';
import { settingsRoute } from '@pages/settings';

export const routes: Routes = [
  profileRoute,
  homeRoute,
  articleRoute,
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
  ],
};
