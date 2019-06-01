import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPayPalModule  } from 'ngx-paypal';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { ProductModule } from './product/product.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CartModule } from './cart/cart.module';
import { PaymentComponent } from './payment/payment.component';
import { OrderModule } from './order/order.module';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

@NgModule({
  declarations: [UserDashboardComponent, ProfileComponent, PaymentComponent, ProfileEditComponent
    ],
  imports: [
    CommonModule,
    ProductModule,
    WishlistModule,
    CartModule,
    OrderModule,
    UserRoutingModule,
    MaterialSharedModule,
    NgxPayPalModule
  ]
})
export class UserModule { }
