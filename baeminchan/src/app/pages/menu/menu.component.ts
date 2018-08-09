import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  subMenu1: string[];
  subMenu2: string[];
  subMenu3: string[];
  subMenu4: string[];
  subMenu5: string[];
  subMenu6: string[];
  subMenu7: string[];
  subMenu8: string[];
  focusedMenu = '';

  constructor() { }

  ngOnInit() {
    this.subMenu1 = ['무침', '나물', '볶음', '조림', '김치', '전', '장아찌·피클', '젓갈·장·소스', '세트'];
    this.subMenu2 = ['국', '찌개', '탕', '전골', '세트'];
    this.subMenu3 = ['고기반찬', '해산물반찬', '생선반찬', '덮밥', '튀김', '면', '양식', '아시아식', '분식', '죽', '세트'];
    this.subMenu4 = ['이유식 초기/중기', '이유식 후기/완료기', '아이반찬', '어린이반찬', '간식·음료'];
    this.subMenu5 = ['1~2인', '3~4인', '아이반찬'];
    this.subMenu6 = ['간편반찬', '간편국찌개', '간편식품'];
    this.subMenu7 = ['베이커리', '과일', '주스', '스무디', '유제품ㆍ커피', '기타간식'];
    this.subMenu8 = ['반찬가게', '반찬장인', '셰프의요리', '전국맛집', '키즈관'];
  }

  mouseEnter(e) {
    console.log('mouseEnter', e);
    this.focusedMenu = e.id;
  }
  mouseLeave() {
    console.log('mouseLeave');
    this.focusedMenu = '';

  }

}
