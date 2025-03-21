import { Route } from '@angular/router';

export const profileRoute:Route = {
  path: 'profile/:username',
  loadComponent: () => import('./profile.component').then(c => c.ProfileComponent)
};
