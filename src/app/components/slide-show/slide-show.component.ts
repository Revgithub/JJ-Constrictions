import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
  imports:[CommonModule]
})
export class SlideShowComponent implements OnInit {
  slides = [
    { image: 'assets/Images/Website-Banner-1.jpg', heading: 'Looking for Budget Friendly Construction?', subtext: 'Download our Quote Now!' },
    { image: 'assets/Images/image5.jpg', heading: 'Quality Construction at Affordable Rates', subtext: 'Get the Best Deals Today!' },
    { image: 'assets/Images/image2.jpg', heading: 'Expert Builders for Your Dream Home', subtext: 'We Turn Your Ideas into Reality' }
  ];

  currentIndex = 0;
  isActive = false;

  ngOnInit() {
    setInterval(() => {
      this.isActive = false;
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.isActive = true;
      }, 500); // Small delay for smooth transition
    }, 2000); // Change every 2 seconds
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.isActive = true;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.isActive = true;
  }
}



  // slideIndex = 1;

  
  //  plusSlides(n:any) {
  //   this.showSlides(this.slideIndex += n);
  // }
  
  // currentSlide(n:any) {
  //   this.showSlides(this.slideIndex = n);
  // }
  
  // showSlides(n:any) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");  
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {this.slideIndex = 1}    
  //   if (n < 1) {this.slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     const slide = slides[i] as HTMLElement;
  //     slide.style.display = "none";  
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   const displaySlide= slides[this.slideIndex-1] as HTMLElement
  //  displaySlide.style.display = "block";  
  //   dots[this.slideIndex-1].className += " active";
  // }

