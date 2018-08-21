import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-item-detail-main',
  templateUrl: './item-detail-main.component.html',
  styleUrls: ['./item-detail-main.component.css']
})
export class ItemDetailMainComponent implements OnInit {

  constructor(public api: ProductApiService) { }

  ngOnInit() {
    this.api.getItemDetail(this.api.itemdetailId);
    console.log(this.api.productItemDetail);
  }

  parentCategory(engName: string) {
    switch (engName) {
      case 'side-dish':
        return '밑반찬';
      case 'soup':
        return '국ㆍ찌개';
      case 'main-courses':
        return '메인반찬';
      case 'kids':
        return '아이반찬';
      case 'set-of-side':
        return '정기반찬';
      case 'fresh':
        return '간편식';
      case 'refreshment':
        return '간식';
      default:
        return '';
    }
  }
}
