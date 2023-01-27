import { Component } from '@angular/core';

@Component({
  selector: 'app-deluxe-rewards',
  templateUrl: './deluxe-rewards.component.html',
  styleUrls: ['./deluxe-rewards.component.css'],
})
export class DeluxeRewardsComponent {
  slideIndex = 1;
  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  plusSlides(n: any) {
    this.showSlides((this.slideIndex += n));
  }

  // Thumbnail image controls
  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n: number) {
    let i;
    let slides: any = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
}
