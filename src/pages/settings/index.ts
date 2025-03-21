import { Route } from '@angular/router';

export const settingsRoute: Route = {
  path: 'profile/:username',
  loadComponent: () =>
    import('./ui/settings/settings.component').then((c) => c.SettingsComponent),
};
