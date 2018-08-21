import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-itemlist-main',
  templateUrl: './item-list-main.component.html',
  styleUrls: ['./item-list-main.component.css']
})
export class ItemListMainComponent implements OnInit {

  currentPage = 1;
  pages = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

  constructor(public api: ProductApiService) {
    console.log('component');
   }

  ngOnInit() {
    this.api.getItemList(this.api.nowActiveMenu);
  }
}
