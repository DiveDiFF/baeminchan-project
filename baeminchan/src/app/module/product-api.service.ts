import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Itemlist {
  count: number;
  next: string;
  previous: string;
  results: object[];
}

interface Images {
  thumbnail_url1: string;
  thumbnail_url2: string;
  thumbnail_url3: string;
  thumbnail_url4: string;
  thumbnail_url5: string;
  thumbnail_url6: string;
}

interface CartItem {
  pk: number;
  product: number;
  amount: number;
  item_total_price: number;
}

interface SlideList {
  id: number;
  raw_name: string;
  description: string;
  price: number
  discount_rate: number
  sale_price: number;
  thumbnail_url1: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  listSortItems = [];
  productItemLists;
  productItemDetail;
  nowActiveMenu = '전체보기';
  itemdetailId: number;
  slideListItems: SlideList[];
  slideListItems2: SlideList[];
  slideListItems3: SlideList[];
  slideListItems4: SlideList[];
  slideListItems5: SlideList[];
  itemlistNextURL = '';
  itemDetailImages = [];
  totalQuantity = 1;
  cartItemList: CartItem[] = [];


  constructor(private http: HttpClient) {
    this.listSortItems = ['전체보기', '무침', '나물무침', '볶음', '조림', '김치', '전', '장아찌·피클', '젓갈·장·소스', '세트' ];
  }

  getItemList(listSortItem) {
    this.nowActiveMenu = listSortItem;
    this.http.get<Itemlist>('https://server.yeojin.me/api/products/?parent_category=side-dish&category=' + this.nowActiveMenu)
    .subscribe(itemlist => {
      this.productItemLists = itemlist.results;
      this.itemlistNextURL = itemlist.next;
    });
    console.log(listSortItem);
  }

  getNextList() {
    this.http.get<Itemlist>(this.itemlistNextURL)
    .subscribe(itemlist => {
      this.productItemLists = [...this.productItemLists, ...itemlist.results];
      this.itemlistNextURL = itemlist.next;
    });
    console.log('[getNextPage]', this.itemlistNextURL);
  }

  getItemDetail(itemID) {
    this.http.get<Images>('https://server.yeojin.me/api/products/' + itemID + '/')
    .subscribe(itemdetail => {
      this.productItemDetail = itemdetail;
      this.itemDetailImages = [
        itemdetail.thumbnail_url1,
        itemdetail.thumbnail_url2,
        itemdetail.thumbnail_url3,
        itemdetail.thumbnail_url4,
        itemdetail.thumbnail_url5,
        itemdetail.thumbnail_url6
      ];

    });
    this.itemdetailId = itemID;
    console.log(itemID);
  }

  getSlideList() {
    this.http.get<SlideList[]>('https://server.yeojin.me/api/products/random/')
    .subscribe(randomslidelist => {
      // this.slideListItems = randomslidelist.slice(0, 12);
      // this.slideListItems = randomslidelist;
      this.slideListItems = this.imageRotate(randomslidelist.slice(0, 12));
      this.slideListItems2 = this.imageRotate(randomslidelist.slice(24, 36));
      this.slideListItems3 = this.imageRotate(randomslidelist.slice(12, 24));
      this.slideListItems4 = this.imageRotate(randomslidelist.slice(72, 84));
      this.slideListItems5 = this.imageRotate(randomslidelist.slice(60, 72));

    });
  }

  imageRotate(arr) {
    return [...arr.slice(-4), ...arr, ...arr.slice(0, 4)];
  }

  starScoreStyle(score: string) {
    switch (score) {
      case '5':
        return 100;
      case '4.5':
        return 90;
      case '4':
        return 80;
      case '3.5':
        return 70;
      case '3':
        return 60;
      case '2.5':
        return 50;
      case '2':
        return 40;
      case '1.5':
        return 30;
      case '1':
        return 20;
      default: return 60;
    }
  }

  itemPlus(target: any) {
    if (isNaN(+target.value)) { return target.value = '1'; }
    console.log('[plus]', target.value);
    target.value = +target.value + 1;
    this.totalQuantity = target.value;
  }

  itemMinus(target: any) {
    if (isNaN(+target.value) || +target.value <= 1 ) { return target.value = '1'; }
    console.log('[minus]', target.value);
    target.value = +target.value - 1;
    this.totalQuantity = target.value;
  }

  getNextPk() {
    return this.cartItemList.length ? Math.max(...this.cartItemList.map(cartItem => cartItem.pk)) + 1 : 1;
  }

  pushCart(amount: number, pk: number, price: number) {
    this.cartItemList = [...this.cartItemList, { pk: this.getNextPk(), product: pk, amount: +amount, item_total_price: price } ];
    console.log(amount, pk, this.cartItemList);
    this.http.post<CartItem[]>('https://server.yeojin.me/api/carts/cartitemlist/', this.cartItemList )
    .subscribe( () => console.log(this.cartItemList) );
  }

  getCartList() {
    this.http.get()
  }
}
