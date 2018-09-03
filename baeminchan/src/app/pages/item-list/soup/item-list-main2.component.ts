import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-itemlist-main2',
  templateUrl: './item-list-main2.component.html',
  styleUrls: ['./item-list-main2.component.css']
})
export class ItemListMain2Component implements OnInit {

  constructor(
      public api: ProductApiService,
  ) { }

  ngOnInit() {
    this.api.getItemList(this.api.parentmenu, this.api.nowActiveMenu);
  }
}
