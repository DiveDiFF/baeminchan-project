import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-itemlist-main7',
  templateUrl: './item-list-main7.component.html',
  styleUrls: ['./item-list-main7.component.css']
})
export class ItemListMain7Component implements OnInit {

  constructor(
      public api: ProductApiService,
  ) { }

  ngOnInit() {
    this.api.getItemList(this.api.parentmenu, this.api.nowActiveMenu);
  }
}
