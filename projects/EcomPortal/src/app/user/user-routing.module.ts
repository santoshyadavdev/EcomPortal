import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from '../common/guard/auth.guard';
import { UserGuard } from './guard/user.guard';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'profile/edit', component: ProfileEditComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard, UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
