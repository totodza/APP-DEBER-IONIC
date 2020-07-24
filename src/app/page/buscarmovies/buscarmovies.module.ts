import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarmoviesPageRoutingModule } from './buscarmovies-routing.module';

import { BuscarmoviesPage } from './buscarmovies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarmoviesPageRoutingModule
  ],
  declarations: [BuscarmoviesPage]
})
export class BuscarmoviesPageModule {}
