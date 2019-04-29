import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from './service/cart.service';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('cartTable') cartTable: MatTable<any>;
  userCart = [];
  displayedColumns: string[] = ['imageUrl', 'productName', 'quantity', 'price', 'actions'];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getUserCart()
      .subscribe(result => {
        result.data.forEach((product: any) => {
          product.UserCart[0].quantity = product.quantity;
          this.userCart.push(product.UserCart[0]);
        });
        this.cartTable.dataSource = this.userCart;
        this.cartTable.renderRows();
      });
  }

}
