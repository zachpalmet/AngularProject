// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { BuildDetailComponent } from './pages/build-detail/build-detail.component';
import { ContactComponent } from './pages/contact/contact.component'; // <-- Import Contact Component

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home - AI PC Picker' },
  { path: 'search', component: SearchResultsComponent, title: 'Search - AI PC Picker' },
  { path: 'build/:id', component: BuildDetailComponent, title: 'Build Details - AI PC Picker' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us - AI PC Picker' } // <-- Add Contact Route
];