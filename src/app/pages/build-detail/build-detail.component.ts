// src/app/pages/build-detail/build-detail.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import ActivatedRoute and RouterLink
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs'; // Import switchMap

import { BuildDataService } from '../../services/build-data.service'; // Adjust path if needed
import { PcBuild } from '../../models/pc-build.model'; // Adjust path if needed

@Component({
  selector: 'app-build-detail',
  standalone: true,
  imports: [CommonModule, RouterLink], // Import CommonModule for *ngIf and RouterLink for back button
  templateUrl: './build-detail.component.html',
  styleUrl: './build-detail.component.css'
})
export class BuildDetailComponent implements OnInit {

  // Inject services
  private route = inject(ActivatedRoute); // Provides access to route parameters
  private buildDataService = inject(BuildDataService);

  // Property to hold the build details (can be PcBuild or undefined)
  build: PcBuild | undefined;

  ngOnInit(): void {
    this.getBuild();
  }

  getBuild(): void {
    console.log("BuildDetailComponent: getting build details...");
    // Get the 'id' parameter from the route snapshot
    // The '+' converts the string parameter to a number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(id)) {
        console.error("BuildDetailComponent: Invalid ID provided in route");
        // Handle error appropriately, maybe navigate back or show message
        return;
    }

    console.log(`BuildDetailComponent: requesting build with ID: ${id}`);
    this.buildDataService.getBuildById(id).subscribe({
        next: (data) => {
            this.build = data;
            console.log("BuildDetailComponent: build data received", this.build);
            if (!this.build) {
                console.warn(`Build with ID ${id} not found.`);
                // Handle case where build is not found
            }
        },
        error: (err) => console.error("BuildDetailComponent: error loading build details", err)
    });

    /* Alternative using route params Observable (more reactive if needed)
    this.route.paramMap.pipe(
        switchMap(params => {
            const id = Number(params.get('id'));
            console.log(`BuildDetailComponent: requesting build with ID: ${id}`);
            return this.buildDataService.getBuildById(id);
        })
    ).subscribe(build => this.build = build);
    */
  }
}