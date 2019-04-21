import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns = ['_id', 'category', 'productName', 'price', 'outOfStock'];
  @Input() productList: any;
  constructor() { }

  ngOnInit() {
  }

}
