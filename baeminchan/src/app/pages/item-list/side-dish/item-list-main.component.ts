import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-itemlist-main',
  templateUrl: './item-list-main.component.html',
  styleUrls: ['./item-list-main.component.css']
})
export class ItemListMainComponent implements OnInit {

  constructor(
      public api: ProductApiService,
  ) { }

  ngOnInit() {
    this.api.getItemList(this.api.parentmenu, this.api.nowActiveMenu);
  }
}
