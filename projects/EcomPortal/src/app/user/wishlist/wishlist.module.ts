import { NgModule } from '@angular/core';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { MaterialSharedModule } from '../../material-shared/material-shared.module';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    MaterialSharedModule ,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
