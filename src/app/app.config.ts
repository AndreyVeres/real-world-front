import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { articleRoutes } from './modules/article';
import { authRoutes, provieAuth } from './modules/auth';
import { JwtInterceptor } from './modules/auth/presentation/interceptors/jwt.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([...articleRoutes, ...authRoutes], withComponentInputBinding()),
    provideHttpClient(withInterceptors([JwtInterceptor])),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      connectInZone: true,
    }),
    provieAuth(),
    importProvidersFrom(MatSnackBar),
  ],
};
