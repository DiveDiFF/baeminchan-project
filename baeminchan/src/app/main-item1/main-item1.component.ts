import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.items = [
      { id: 1, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 2, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 3, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 4, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 5, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 6, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 7, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 8, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 9, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },
      { id: 10, sort: 'sidedish', url: '#', img: 'https://cdn.bmf.kr/_data/product/I76F5/d59eaa5e475cae0269fbfd2fb94403c2.jpg',
        title: '[진가네반찬] 호두아몬드땅콩조림 200g', description: '네 가지 견과류로 건강하게 호두아몬드땅콩조림', score: '5점 만점에 4점',
        reviewcount: 13, price: 5000 },

    ];
  }

}
