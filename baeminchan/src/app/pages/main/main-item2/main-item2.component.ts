import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../module/product-api.service';

@Component({
  selector: 'app-main-item2',
  templateUrl: './main-item2.component.html',
  styleUrls: ['./main-item2.component.css']
})
export class MainItem2Component implements OnInit {
  changePage = false;

  translateWidth = -980;
  constructor( public api: ProductApiService ) { }

  ngOnInit() {
    this.api.getSlideList();
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

