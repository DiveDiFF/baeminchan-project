import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-itemlist-main5',
  templateUrl: './item-list-main5.component.html',
  styleUrls: ['./item-list-main5.component.css']
})
export class ItemListMain5Component implements OnInit {

  constructor(
      public api: ProductApiService,
  ) { }

  ngOnInit() {
    this.api.getItemList(this.api.parentmenu, this.api.nowActiveMenu);
  }
}
