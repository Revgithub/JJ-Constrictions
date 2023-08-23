import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  standalone:true,
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css'],
  imports:[MaterialModule]
})
export class HeaderFooterComponent {
  resize()
  {
    let x = document.getElementById("myTopnav");
    console.log(x);
    if(x)
    if (x?.className === "topnav") {
      x.className += " responsive";
      console.log(x.className);
    } else {
      x.className = "topnav";
    }
  }
}
