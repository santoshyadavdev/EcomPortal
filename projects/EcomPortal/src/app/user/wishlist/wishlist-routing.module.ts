import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist.component';
import { AuthGuard } from '../../common/guard/auth.guard';
import { UserGuard } from '../guard/user.guard';

const routes: Routes = [
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard, UserGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
