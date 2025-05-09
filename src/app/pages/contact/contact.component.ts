// src/app/pages/contact/contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Add FormsModule
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Properties to bind to form inputs using ngModel
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  formSubmitted = false; // Flag to show success message

  // Method called when the form is submitted
  onSubmit() {
    console.log('Contact Form Submitted:', this.contactForm);
    this.formSubmitted = true;
    // In a real app, you would send this data to a server/backend here
    // You could reset the form after submission if desired:
    // this.contactForm = { name: '', email: '', message: '' };
  }
}