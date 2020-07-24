import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarmoviesPage } from './buscarmovies.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarmoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarmoviesPageRoutingModule {}
