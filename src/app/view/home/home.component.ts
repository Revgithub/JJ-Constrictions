import { Component } from '@angular/core';
import { SlideShowComponent } from 'src/app/components/slide-show/slide-show.component';

@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[SlideShowComponent]
})
export class HomeComponent {

}
