import { Route } from '@angular/router';

export const editorRoute: Route = {
  path: 'editor',
  loadComponent: () =>
    import('./editor/editor.component').then((c) => c.EditorComponent),
};
