import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
declarations:[],
imports:[MatToolbarModule,MatButtonModule,MatIconModule],

exports:[MatToolbarModule,
    MatButtonModule,MatIconModule]
})
export class MaterialModule { }