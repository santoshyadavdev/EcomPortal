import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { ProductModule } from './product/product.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [UserDashboardComponent, ProfileComponent
    ],
  imports: [
    CommonModule,
    ProductModule,
    WishlistModule,
    CartModule,
    UserRoutingModule,
    MaterialSharedModule
  ]
})
export class UserModule { }
