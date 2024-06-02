import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'catalog',
    loadChildren: () => import('catalog/Module').then(m => m.RemoteEntryModule)
  }
];
