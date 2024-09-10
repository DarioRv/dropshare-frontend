import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FileDownloadPageComponent } from './pages/file-download-page/file-download-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'DropShare',
    pathMatch: 'full',
  },
  {
    path: ':slug',
    component: FileDownloadPageComponent,
    title: 'Descargar archivo',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
