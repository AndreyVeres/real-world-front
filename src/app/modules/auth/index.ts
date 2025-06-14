import { AuthEffects } from './presentation/store/effects/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { Routes } from '@angular/router';
import { GuestGuard } from './presentation/guards/guest.guard';
import { AuthFacade } from './application/auth.facade';
import { AuthRepository } from './domain/repository/auth.repository';
import { AuthHttpRepository } from './infrastructure/http-auth.repository';
import { provideState } from '@ngrx/store';
import { authFeatureKey, authReducer } from './presentation/store/reducers/auth.reducer';
import { SessionRepository } from './domain/repository/session.repository';
import { LocalStorageSessionRepository } from './infrastructure/local-storage-session.repository';
import { inject, provideAppInitializer } from '@angular/core';
import { EMPTY } from 'rxjs';
import { LoginUseCase } from './application/use-cases/login.use-case';
import { MeUseCase } from './application/use-cases/me.use-case';

export const appInitializer = () => {
  const token = inject(SessionRepository).getToken();
  const meUseCase = inject(MeUseCase);
  return token ? meUseCase.execute() : EMPTY;
};

export const provieAuth = () => [
  AuthFacade,
  provideEffects([AuthEffects]),
  provideState(authFeatureKey, authReducer),
  {
    provide: AuthRepository,
    useClass: AuthHttpRepository,
  },
  {
    provide: SessionRepository,
    useClass: LocalStorageSessionRepository,
  },
  LoginUseCase,
  MeUseCase,
  provideAppInitializer(appInitializer),
];

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./presentation/pages/login/login.component').then((mod) => mod.LoginComponent),
    canActivate: [GuestGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./presentation/pages/register/register.component').then((mod) => mod.RegisterComponent),
    canActivate: [GuestGuard],
  },
  {
    path: 'settings',
    loadComponent: () => import('./presentation/pages/settings/settings.component').then((mod) => mod.SettingsComponent),
  },
];
