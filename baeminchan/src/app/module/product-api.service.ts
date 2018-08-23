import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  price: number;
  discount_rate: number;
  sale_price: number;
  thumbnail_url1: string;
}

interface GetCartItem {
  pk: number;
  product: object[];
  amount: number;
  item_total_price: number
}


@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  listSortItems = [];
  listSortItems2 = [];
  listSortItems3 = [];
  listSortItems4 = [];
  listSortItems5 = [];
  listSortItems6 = [];
  listSortItems7 = [];
  productItemLists;
  productItemDetail;
  nowActiveMenu = '전체보기';
  slideListItems: SlideList[];
  slideListItems2: SlideList[];
  slideListItems3: SlideList[];
  slideListItems4: SlideList[];
  slideListItems5: SlideList[];
  itemlistNextURL = '';
  itemDetailImages = [];
  totalQuantity = 1;
  cartItemList: CartItem[] = [];
  searchTarget = '';
  searchItemLists: SlideList[] = [] ;
  userToken: string;
  parentmenu: string;
  getCartItemLists: GetCartItem[] = [];


  constructor(private http: HttpClient) {
    this.listSortItems = ['전체보기', '무침', '나물무침', '볶음', '조림', '김치', '전', '장아찌·피클', '젓갈·장·소스', '세트' ];
    this.listSortItems2 = ['전체보기', '국', '찌개', '탕', '전골', '세트'];
    this.listSortItems3 = ['전체보기', '고기반찬', '해산물반찬', '생선반찬', '덮밥', '튀김', '면', '양식', '아시아식', '분식', '죽', '세트'];
    this.listSortItems4 = ['전체보기', '이유식 초기/중기', '이유식 후기/완료기', '아이반찬', '어린이반찬', '간식·음료'];
    this.listSortItems5 = ['전체보기', '1~2인', '3~4인', '아이반찬'];
    this.listSortItems6 = ['전체보기', '간편반찬', '간편국찌개', '간편식품'];
    this.listSortItems7 = ['전체보기', '베이커리', '과일', '주스', '스무디', '유제품ㆍ커피', '기타간식'];

  }

  getItemList(parentmenu, listSortItem) {
    this.nowActiveMenu = listSortItem;
    this.http.get<Itemlist>('https://server.yeojin.me/api/products/?parent_category=' + this.parentmenu + '&category=' + this.nowActiveMenu)
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

  starScoreStyle(score: number) {
    switch (score) {
      case 5:
        return 100;
      case 4.5:
        return 90;
      case 4:
        return 80;
      case 3.5:
        return 70;
      case 3:
        return 60;
      case 2.5:
        return 50;
      case 2:
        return 40;
      case 1.5:
        return 30;
      case 1:
        return 20;
      default: return 0;
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
    const cartItem = { pk: this.getNextPk(), product: pk, amount: +amount, item_total_price: price };
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${this.userToken}`
      })
    };
    console.log(this.userToken);
    this.http.post<CartItem>('https://server.yeojin.me/api/carts/cartitemlist/', cartItem, httpOptions)
    .subscribe( () => {
      this.cartItemList = [...this.cartItemList, cartItem];
      console.log('[pushcart]', cartItem);
    });
  }

  getCartItem() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${this.userToken}`
      })
    };
    this.http.get<GetCartItem>('https://server.yeojin.me/api/carts/cartitemlist/', httpOptions)
    .subscribe( itemList => {
      console.log('[get]', this.userToken, itemList);
      this.getCartItemLists = itemList;
    });
  }

  searchItemList(target) {
    this.http.get<SlideList[]>('https://server.yeojin.me/api/products/search/?query=' + target)
    .subscribe(itemlist => {
      this.searchItemLists = itemlist;
      console.log(this.searchItemLists);
    });
  }

  removeToken(): void {
    localStorage.removeItem('Token');
    console.log('[logout]', this.userToken);
    this.userToken = '';
  }

  modifyAmount(pk) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${this.userToken}`
      })
    };
    this.http.patch('https://server.yeojin.me/api/carts/cartitemdetail/' + pk + '/', { amount: 10 }, httpOptions )
    .subscribe( () => {
      this.getCartItemLists.map( itemList => {
        return itemList.pk === pk ? {...itemList, amount: this.totalQuantity } : itemList;
      });
      console.log('[modifyAmount]', pk, this.getCartItemLists);
    });

  }

  deleteCartItem(pk) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${this.userToken}`
      })
    };
    this.http.delete('https://server.yeojin.me/api/carts/cartitemdetail/' + pk + '/', httpOptions)
    .subscribe( () => {
      console.log('[deleteCartItem]', pk);
      this.getCartItemLists = this.getCartItemLists.filter( itemList => {
          return itemList.pk !== pk;
      });
      this.cartItemList.pop();
      console.log(this.cartItemList);
      console.log(this.getCartItemLists);
    });
  }

  cartTotalPrice() {
    let result = 0;
    this.getCartItemLists.forEach( cartItem => {
      result = result + cartItem.item_total_price;
    });
    return result;
  }
  // getCartList() {
  //   this.http.get()
  // }


}
