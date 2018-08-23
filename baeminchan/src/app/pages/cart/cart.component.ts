import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../module/product-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public api: ProductApiService) {
    api.getCartItem();

   }

  ngOnInit() {
  }


}
