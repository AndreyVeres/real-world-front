import { Route } from '@angular/router';

export const settingsRoute: Route = {
  path: 'settings',
  loadComponent: () =>
    import('./ui/settings/settings.component').then((c) => c.SettingsComponent),
};
