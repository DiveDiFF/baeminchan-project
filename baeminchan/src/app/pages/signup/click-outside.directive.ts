import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

/**
 * 호스트 컴포넌트의 영역 외부를 클릭하면 clickOutSide 이벤트를 방출
 */
@Directive({
  selector: '[clickOutSide]'
})
export class ClickOutSideDirective {
  constructor(private elementRef: ElementRef) { }

  @Output() clickOutSide = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(e: MouseEvent, target: HTMLElement) {

    if (!target) { return; }

    // 이벤트를 발생시킨 요소가 호스트 요소의 자식이 아니면 clickOutside 이벤트 방출
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.clickOutSide.emit(e);
    }
  }

}