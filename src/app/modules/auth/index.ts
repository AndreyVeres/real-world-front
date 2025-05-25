import { AuthEffects } from './presentation/store/effects/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/pages/login/login.component';
import { RegisterComponent } from './presentation/pages/register/register.component';
import { GuestGuard } from './presentation/guards/guest.guard';
import { AuthFacade } from './application/auth.facade';
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
import { EMPTY } from 'rxjs';
import { LoginUseCase } from './application/use-cases/login.use-case';
import { MeUseCase } from './application/use-cases/me.use-case';
import { SetUserUseCase } from './application/use-cases/set-user.use-case';

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
  SetUserUseCase,

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
