import { Route } from '@angular/router';

export const editorRoute: Route = {
  path: 'profile/:username',
  loadComponent: () =>
    import('./editor/editor.component').then((c) => c.EditorComponent),
};
