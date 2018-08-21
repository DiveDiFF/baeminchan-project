import { Component, OnInit } from '@angular/core';


interface Image {
  id: number;
  url: string;
}


@Component({
  selector: 'app-main-slides',
  templateUrl: './main-slides.component.html',
  styleUrls: ['./main-slides.component.css']
})
export class MainSlidesComponent implements OnInit {
  images: Image[];
  paginations: number[];
  currentState = 1;
  constructor() { }

  ngOnInit() {
    this.images = [
      { id: 1, url: 'https://cdn.bmf.kr/banner/main_banner/180717/1531803657385_4c2a16db8f58.jpg'},
      { id: 2, url: 'https://cdn.bmf.kr/banner/main_banner/180711/1531274440828_fb6f826bd310.jpg'},
      { id: 3, url: 'https://cdn.bmf.kr/banner/main_banner/180712/1531358778890_d4b2907c8c8a.jpg'},
      { id: 4, url: 'https://cdn.bmf.kr/banner/main_banner/180620/1529480273865_928687451253.jpg'},
      { id: 5, url: 'https://cdn.bmf.kr/banner/main_banner/180608/1528449480985_4b59a338f5a8.jpg'},
      { id: 6, url: 'https://cdn.bmf.kr/banner/main_banner/180705/1530768727882_fda9fbffa56a.jpg'}
    ];
    this.paginations = [ 1, 2, 3, 4, 5, 6 ];
    setInterval( () => this.currentState = this.currentState < 6 ? this.currentState += 1 : 1, 4000 );
  }

  prevSlide() {
    this.currentState = this.currentState > 1 ? this.currentState -= 1 : 6;
  }
  nextSlide() {
    this.currentState = this.currentState < 6 ? this.currentState += 1 : 1;
  }
  changeNow(pagination: number) {
    this.currentState = pagination;
  }


}
