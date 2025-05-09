// src/app/pages/search-results/search-results.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // <-- 1. Import RouterLink
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { BuildDataService } from '../../services/build-data.service';
import { PcBuild } from '../../models/pc-build.model';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
      CommonModule,
      FormsModule,
      RouterLink // <-- 2. Add RouterLink HERE
    ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {

  private buildDataService = inject(BuildDataService);
  builds: PcBuild[] = [];
  searchTerm: string = '';
  private searchTerms = new Subject<string>();

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.buildDataService.searchBuilds(term)),
    ).subscribe({
        next: (filteredBuilds) => { this.builds = filteredBuilds; },
        error: (err) => console.error("Error searching builds", err)
    });
    this.searchTerms.next(''); // Initial load
  }

  search(): void {
    this.searchTerms.next(this.searchTerm);
    console.log(`Pushed search term: ${this.searchTerm}`);
  }
}