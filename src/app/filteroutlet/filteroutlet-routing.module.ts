import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilteroutletPage } from './filteroutlet.page';

const routes: Routes = [
  {
    path: '',
    component: FilteroutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteroutletPageRoutingModule {}
