import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';


@NgModule({
  declarations: [
    ProductComponent, ProductListComponent, ProductDetailsComponent
  ],
  imports: [
    MaterialSharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
