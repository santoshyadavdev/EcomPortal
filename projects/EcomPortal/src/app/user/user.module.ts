import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
