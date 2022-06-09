import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgChartsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
