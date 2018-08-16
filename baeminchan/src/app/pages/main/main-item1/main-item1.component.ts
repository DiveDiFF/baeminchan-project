import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

interface Item {
  id: number;
  sort: string;
  url: string;
  img: string;
  title: string;
  description: string;
  score: string;
  reviewcount: number;
  price: number;
  badge?: boolean;
}

@Component({
  selector: 'app-main-item1',
  templateUrl: './main-item1.component.html',
  styleUrls: ['./main-item1.component.css']
})
export class MainItem1Component implements OnInit {
  items: Item[];
  changePage = false;
  rotateItems: Item[];
  translateWidth = -980;
  constructor( public api: ProductApiService ) { }

  ngOnInit() {
    this.items = [
      { id: 1, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[1진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 2, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[2진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 5점',
        reviewcount: 13, price: 5000 },
      { id: 3, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[3진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 2점',
        reviewcount: 13, price: 5000 },
      { id: 4, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[4진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 3점',
        reviewcount: 13, price: 5000 },
      { id: 5, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[5진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 6, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[6진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 7, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[7진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 5점',
        reviewcount: 13, price: 5000 },
      { id: 8, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[8진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 9, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[9진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 3점',
        reviewcount: 13, price: 5000 },
      { id: 10, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[10진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 11, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[11진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 12, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[12진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },

    ];

    this.imageRotate(this.items);
  }

  thumbSlidePrev() {
    this.translateWidth += 980;
    if (this.translateWidth !== 0) { this.changePage = false;
    } else {
      setTimeout(() => {
        this.changePage = true;
        this.translateWidth = -2940;
      }, 500);
    }
    // this.translateWidth = this.translateWidth === 0 ? -2940 : this.translateWidth;
    console.log('prev', this.translateWidth, this.changePage);
  }

  thumbSlideNext() {
    this.translateWidth -= 980;
    if (this.translateWidth !== -3920) { this.changePage = false;
    } else {
      setTimeout(() => {
        this.changePage = true;
        this.translateWidth = -980;
      }, 500);
    }
    // this.translateWidth = this.translateWidth === -3920 ? -980 : this.translateWidth;
    console.log('next', this.translateWidth, this.changePage);
  }

  imageRotate(arr: Item[]) {
    this.rotateItems = [...arr.slice(-4), ...arr, ...arr.slice(0, 4)];
  }

  thumbChange() {
    return `translate3d(${this.translateWidth}px, 0px, 0px)`;
  }

  thumbChangeDuration() {
    if (this.changePage) {
      return '0s';
    } else {
      return '0.5s';
    }
  }
}
