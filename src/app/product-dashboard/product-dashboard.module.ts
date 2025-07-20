import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDashboardPageRoutingModule } from './product-dashboard-routing.module';

import { ProductDashboardPage } from './product-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDashboardPageRoutingModule
  ],
  declarations: [ProductDashboardPage]
})
export class ProductDashboardPageModule {}