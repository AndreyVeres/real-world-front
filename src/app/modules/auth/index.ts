import { AuthEffects } from './presentation/store/effects/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/pages/login/login.component';
import { RegisterComponent } from './presentation/pages/register/register.component';
import { GuestGuard } from './presentation/guards/guest.guard';
import { AuthFacade } from './application/auth.facade';
import { AuthApplicationService } from './application/auth-application.service';
import { AuthRepository } from './domain/repository/auth.repository';
import { AuthHttpRepository } from './infrastructure/http-auth.repository';
import { provideState } from '@ngrx/store';
import {
  authFeatureKey,
  authReducer,
} from './presentation/store/reducers/auth.reducer';
import { SessionRepository } from './domain/repository/session.repository';
import { LocalStorageSessionRepository } from './infrastructure/local-storage-session.repository';
import { inject, provideAppInitializer } from '@angular/core';
import { EMPTY, map, of, switchMap } from 'rxjs';

export const appInitializer = () => {
  const authFacade = inject(AuthFacade);
  const $user = authFacade.$user;

  return $user.pipe(switchMap(async () => authFacade.me()));
};

export const provieAuth = () => [
  AuthFacade,
  provideEffects([AuthEffects]),
  provideState(authFeatureKey, authReducer),
  AuthApplicationService,
  {
    provide: AuthRepository,
    useClass: AuthHttpRepository,
  },
  {
    provide: SessionRepository,
    useClass: LocalStorageSessionRepository,
  },

  provideAppInitializer(appInitializer),
];

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [GuestGuard],
  },
];
