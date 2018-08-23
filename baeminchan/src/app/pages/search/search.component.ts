import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../module/product-api.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTitle = '';

  constructor(
      public api: ProductApiService,
      private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log(params['target']);
      api.searchItemList(params['target']);
      this.searchTitle = params['target'];

    });
   }

  ngOnInit() {
    // this.api.getItemList(this.api.nowActiveMenu);
  }
}
