import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilteroutletPageRoutingModule } from './filteroutlet-routing.module';

import { FilteroutletPage } from './filteroutlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilteroutletPageRoutingModule
  ],
  declarations: [FilteroutletPage]
})
export class FilteroutletPageModule {}
