import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [OrderComponent, OrderDetailsComponent],
  imports: [
    MaterialSharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
