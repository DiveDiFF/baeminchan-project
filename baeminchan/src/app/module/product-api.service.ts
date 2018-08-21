import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  listSortItems = [];
  productItemLists;
  productItemDetail;
  nowActiveMenu = '전체보기';
  itemdetailId: number;
  slideListItems;
  rotateItems = [];
  itemlistNextURL = '';


  constructor(private http: HttpClient) {
    this.listSortItems = ['전체보기', '무침', '나물무침', '볶음', '조림', '김치', '전', '장아찌·피클', '젓갈·장·소스', '세트' ];
  }

  getItemList(listSortItem) {
    this.nowActiveMenu = listSortItem;
    this.http.get('https://server.yeojin.me/api/products/?parent_category=side-dish&category=' + this.nowActiveMenu)
    .subscribe(itemlist => {
      this.productItemLists = itemlist.results;
      this.itemlistNextURL = itemlist.next;
    });
    console.log(listSortItem);
  }

  getNextList() {
    this.http.get(this.itemlistNextURL)
    .subscribe(itemlist => {
      this.productItemLists = [...this.productItemLists, ...itemlist.results];
      this.itemlistNextURL = itemlist.next;
    });
    console.log('[getNextPage]', this.itemlistNextURL);
  }

  getItemDetail(itemID) {
    this.http.get('https://server.yeojin.me/api/products/' + itemID + '/')
    .subscribe(itemdetail => this.productItemDetail = itemdetail);
    this.itemdetailId = itemID;
    console.log(itemID);
  }

  getSlideList() {
    this.http.get('https://server.yeojin.me/api/products/random/')
    .subscribe(randomslidelist => {
      this.slideListItems = randomslidelist;
      this.imageRotate(this.slideListItems);
    });
  }

  imageRotate(arr) {
    this.rotateItems = [...arr.slice(-4), ...arr, ...arr.slice(0, 4)];
  }

  starScoreStyle(score: string) {
    switch (score) {
      case '5점 만점에 5점':
        return 100;
      case '5점 만점에 4.5점':
        return 90;
      case '5점 만점에 4점':
        return 80;
      case '5점 만점에 3.5점':
        return 70;
      case '5점 만점에 3점':
        return 60;
      case '5점 만점에 2.5점':
        return 50;
      case '5점 만점에 2점':
        return 40;
      case '5점 만점에 1.5점':
        return 30;
      case '5점 만점에 1점':
        return 20;
      default: return 0;
    }
  }
}
