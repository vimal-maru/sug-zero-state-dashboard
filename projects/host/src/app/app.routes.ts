import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Routes').then((m) => m.routes),
  },
];
