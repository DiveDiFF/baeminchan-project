import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-item-detail-main',
  templateUrl: './item-detail-main.component.html',
  styleUrls: ['./item-detail-main.component.css']
})
export class ItemDetailMainComponent implements OnInit {
  foldingMenu1 = true;
  foldingMenu2 = true;
  foldingMenu3 = true;
  foldingTitle1 = '접어두기';
  foldingTitle2 = '접어두기';
  foldingTitle3 = '접어두기';
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

  folingMenuBtn() {
    this.foldingMenu1 = !this.foldingMenu1;
    this.foldingTitle1 = this.foldingTitle1 === '접어두기' ? '펼치기' : '접어두기';
  }
  folingMenuBtn2() {
    this.foldingMenu2 = !this.foldingMenu2;
    this.foldingTitle2 = this.foldingTitle2 === '접어두기' ? '펼치기' : '접어두기';
  }
  folingMenuBtn3() {
    this.foldingMenu3 = !this.foldingMenu3;
    this.foldingTitle3 = this.foldingTitle3 === '접어두기' ? '펼치기' : '접어두기';
  }
}
