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
import { EditorComponent } from '@pages/editor/editor/editor.component';
import { SettingsComponent } from '@pages/settings/ui/settings/settings.component';

export const routes: Routes = [
  profileRoute,
  homeRoute,
  articleRoute,
  ...authRoutes,
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([JwtInterceptor])),
    provideAppInitializer(appInitializer),
  ],
};
