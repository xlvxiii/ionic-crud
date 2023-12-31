import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mahasiswa',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./folder/folder.page').then((m) => m.FolderPage),
  // },
  {
    path: 'mahasiswa',
    loadComponent: () => import('./mahasiswa/mahasiswa.page').then( m => m.MahasiswaPage)
  },
];
