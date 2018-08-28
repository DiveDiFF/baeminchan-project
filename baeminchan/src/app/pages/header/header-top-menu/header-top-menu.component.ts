import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-header-top-menu',
  templateUrl: './header-top-menu.component.html',
  styleUrls: ['./header-top-menu.component.css']
})
export class HeaderTopMenuComponent implements OnInit {

  constructor(public api: ProductApiService) { }

  ngOnInit() {
  }

  get userToken() {
    return this.api.userToken;
  }
}
