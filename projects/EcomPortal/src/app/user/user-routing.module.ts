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

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard, UserGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
