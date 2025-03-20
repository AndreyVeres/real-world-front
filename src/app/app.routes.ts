import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './shared/guards/auth.guard';
import { authRoutes } from './features/auth/auth.routes';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [authGuard],
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
  ...authRoutes,
];
