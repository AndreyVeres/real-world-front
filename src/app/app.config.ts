import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtInterceptor } from './features/auth/jwt.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { TokenService } from './features/auth/services/token.service';
import { AuthService } from './features/auth/services/auth.service';
import { EMPTY } from 'rxjs';

const appInitializer = () => {
  const accessToken = inject(TokenService).getToken();
  const authService = inject(AuthService);

  return accessToken ? authService.me() : EMPTY;
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([JwtInterceptor, LoadingInterceptor])),
    provideAppInitializer(appInitializer),
  ],
};
