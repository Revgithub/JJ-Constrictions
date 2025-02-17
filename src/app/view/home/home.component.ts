import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlideShowComponent } from 'src/app/components/slide-show/slide-show.component';
import { ImagedialogComponent } from 'src/app/imagedialog/imagedialog.component';
import { MaterialModule } from 'src/app/material.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { QuoteComponent } from 'src/app/quote/quote.component';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[SlideShowComponent,MaterialModule,CommonModule,ImagedialogComponent,MatDialogModule, MatTabsModule]
})
export class HomeComponent {
  // images = [
  //   'assets/img1.jpg',
  //   'assets/img2.jpg',
  //   'assets/img3.jpg'
  // ];
  scrollToPortfolio() {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  }
  scrollToAboutUs() {
    document.getElementById("aboutUs")?.scrollIntoView({ behavior: "smooth" });
  }
  openImage(image: string) {
    window.open(image, '_blank');
  }
  resize() {
    let x = document.getElementById("myTopnav");
    if (x?.className === "topnav") {
      x.className += " responsive";
    } else {
      x!.className = "topnav";
    }
  }

  images1 = [
    
 {'src': "assets/Images/image1.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image2.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image3.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image4.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image5.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image6.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image7.jpg",'name':'MaxWorthNagar'},
 {'src': "assets/Images/image8.jpg",'name':'MaxWorthNagar'},
 
];

constructor(public dialog: MatDialog) {}

  openDialog(imageSrc: string) {
    this.dialog.open(ImagedialogComponent, {
      data: { src: imageSrc },
      width: '80vw',
      height: '80vh',
      panelClass: 'custom-dialog'
    });
  }

  openQuoteDialog() {
    this.dialog.open(QuoteComponent, {
      width: '500px'
    });
  }
}
