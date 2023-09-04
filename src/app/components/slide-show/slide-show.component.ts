import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }
  slideIndex = 1;

  
   plusSlides(n:any) {
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n:any) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n:any) {
    let i;
    let slides = document.getElementsByClassName("mySlides");  
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    const displaySlide= slides[this.slideIndex-1] as HTMLElement
   displaySlide.style.display = "block";  
    dots[this.slideIndex-1].className += " active";
  }
}
