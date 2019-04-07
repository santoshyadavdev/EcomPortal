import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../service/user';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe((data) => {
      if (data.status === 'success') {
        this.navigate(data.role);
      } else {
        this.snackBar.open(data.message, 'Login', {
          duration: 1000
        });
      }
    });
  }

  navigate(role: string) {
    switch (role) {
      case 'User':
        // redirect to User
        this.router.navigate(['/user/dashboard']);
        break;
      case 'Admin':
        // redirect to Admin
        this.router.navigate(['/admin/dashboard']);
        break;
      default:
        this.snackBar.open('User does not belongs to a valid role!', 'Login', {
          duration: 1000
        });
    }
  }

}
