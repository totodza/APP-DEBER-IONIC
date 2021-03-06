import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'buscarmovies',
    loadChildren: () => import('./page/buscarmovies/buscarmovies.module').then( m => m.BuscarmoviesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./page/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./page/detail/detail.module').then( m => m.DetailPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
<<<<<<< HEAD
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
];
=======
>>>>>>> 156680b3db1812c5ce60020419336f513082fb4c

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
