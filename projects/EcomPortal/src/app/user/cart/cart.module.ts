import { NgModule } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    MaterialSharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
