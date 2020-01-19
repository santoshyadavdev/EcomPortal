import { Component, OnInit, Optional } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { CategoryService } from '../service/category.service';
import { CartService } from '../../user/cart/service/cart.service';
import { IResponse } from '../service/IResponse';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  loginStatus$: Observable<boolean>;
  role$: Observable<string>;
  cart$ : Observable<IResponse>;
  categories: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    @Optional() private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit() {
    this.loginStatus$ = this.loginService.isLoggedIn();
    this.role$ = this.loginService.userRole();
    this.getCategories();
    if(this.cartService) {
      this.cart$ = this.cartService.getUserCart();
    }

  }

  private getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result.data;
    });
  }

  logout() {
    sessionStorage.clear();
    this.loginService.isLoggedIn(false);
    this.loginService.userRole('');
    this.router.navigate(['/login']);
  }

  getProduct(categoryName: string) {
    this.router.navigate(['/user/product'], { queryParams: { category: categoryName } });
  }
}
