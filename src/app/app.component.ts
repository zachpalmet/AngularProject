// src/app/app.component.ts
import { Component /*, HostBinding - REMOVE IF PRESENT */ } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ai-pc-picker-angular';

  // REMOVE this line if you added it before
  // @HostBinding('class') class = 'd-flex flex-column h-100';
}