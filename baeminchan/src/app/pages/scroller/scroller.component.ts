import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent {
  scrollOn = false;
  startToFixed = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition, this.scrollOn);
    this.scrollOn = scrollPosition >= this.startToFixed ? true : false;

  }

  activeScroller() {
    return this.scrollOn ? '1' : '0';
  }

  goToPageUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  }
  goToPageDown() {
    window.scrollTo({
      top: 111110,
      behavior: 'smooth'
  });
  }
}
