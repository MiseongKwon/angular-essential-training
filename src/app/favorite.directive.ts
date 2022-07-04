import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @HostListener('mousedown') onMousedown() {
    switch(this.isFavorite) {
      case true :
        this.hovering = false;
        this.isFavorite = false;
        break;
      case false : 
        this.hovering = true;
        this.isFavorite = true;
        break;

    }
  }

  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
