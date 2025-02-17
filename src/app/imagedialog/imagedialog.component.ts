import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-imagedialog',
  templateUrl: './imagedialog.component.html',
  styleUrls: ['./imagedialog.component.css'],
  imports:[MaterialModule,MatDialogModule],
  standalone:true
})
export class ImagedialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ImagedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { src: string }
  ) {}
}
