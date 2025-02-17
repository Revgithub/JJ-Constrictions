import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  standalone:true,
  imports:[MatDialogModule,FormsModule,ReactiveFormsModule,CommonModule,
    MatButtonModule,MatFormFieldModule,MatInputModule]
})
export class QuoteComponent {
  constructor(private dialogRef: MatDialogRef<QuoteComponent>) {}
  name: string = '';  // Stores user name
  email: string = ''; // Stores user email
  mobile: string = ''; // Stores user mobile number
  message: string = ''; // Stores user message
  sendEmail(contactForm: any) {
    console.log(contactForm)
    if (contactForm.valid) {
      const serviceID = 'service_yo9rb5d';
      const templateID = 'template_98bqlx6';
      const publicKey = '1JvdyS_VaGlNgV1qA';

      emailjs.send(serviceID, templateID, contactForm.value, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert(' We have Received Your Details!. Will Call you back');
          this.dialogRef.close(); // Close the dialog
        }, (error) => {
          console.error('FAILED...', error);
          alert('Email sending failed.');
        });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
