import { Component, OnInit, ViewChild } from '@angular/core';
import { WishlistService } from './service/wishlist.service';
import { map } from 'rxjs/operators';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @ViewChild('wishListTable') wishListTable: MatTable<any>;
  wishList = [];
  displayedColumns: string[] = ['imageUrl', 'productName', 'price', 'actions'];
  constructor(private wishListService: WishlistService) { }

  ngOnInit() {
    this.wishListService.getWishList()
      .subscribe(result => {
        result.data.forEach((product: any) => {
          this.wishList.push(product.UserWishList[0]);
        });
        this.wishListTable.dataSource = this.wishList;
        this.wishListTable.renderRows();
      });
  }

}
