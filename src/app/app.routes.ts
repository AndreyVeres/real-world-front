import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { ProfileComponent } from './pages/profile/profile.component';
import { homeRoute } from '@pages/home';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  homeRoute,
  ...authRoutes,
];
