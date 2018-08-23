import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-itemlist-main4',
  templateUrl: './item-list-main4.component.html',
  styleUrls: ['./item-list-main4.component.css']
})
export class ItemListMain4Component implements OnInit {

  constructor(
      public api: ProductApiService,
  ) { }

  ngOnInit() {
    this.api.getItemList(this.api.parentmenu, this.api.nowActiveMenu);
  }
}
