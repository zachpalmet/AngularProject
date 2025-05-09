// src/app/components/navbar/navbar.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Good practice, imports common directives like *ngIf, *ngFor
import { RouterLink, RouterLinkActive } from '@angular/router'; // <-- CRUCIAL: Import both RouterLink and RouterLinkActive

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
      CommonModule,       // Include CommonModule
      RouterLink,       // <-- CRUCIAL: Make RouterLink directive available
      RouterLinkActive  // <-- CRUCIAL: Make RouterLinkActive directive available
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // No specific logic needed for this simple navbar yet
}