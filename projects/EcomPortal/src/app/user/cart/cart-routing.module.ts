import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common/guard/auth.guard';
import { UserGuard } from '../guard/user.guard';
import { CartComponent } from './cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard, UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
