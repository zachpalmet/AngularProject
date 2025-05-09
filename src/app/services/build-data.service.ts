import { Injectable } from '@angular/core';
import { PcBuild } from '../models/pc-build.model'; 
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root' 
})
export class BuildDataService {

  // PC Builds
  private mockBuilds: PcBuild[] = [
    {
      id: 1,
      name: "Budget Gamer",
      description: "Great starting point for 1080p gaming on a budget.",
      cpu: "AMD Ryzen 5 5600G",
      gpu: "Integrated Radeon Graphics", 
      ram: "16GB DDR4 3200MHz",
      storage: "512GB NVMe SSD",
      approxPrice: 650,
      useCase: 'Gaming'
    },
    {
      id: 2,
      name: "Mid-Range Workhorse",
      description: "Solid performance for 1080p/1440p gaming and productivity.",
      cpu: "Intel Core i5-12400F",
      gpu: "NVIDIA GeForce RTX 3060",
      ram: "16GB DDR4 3600MHz",
      storage: "1TB NVMe SSD",
      approxPrice: 1100,
      useCase: 'Gaming'
    },
    {
      id: 3,
      name: "Content Creator Pro",
      description: "Powerful CPU and GPU for video editing, rendering, and design.",
      cpu: "AMD Ryzen 7 7700X",
      gpu: "NVIDIA GeForce RTX 4070",
      ram: "32GB DDR5 5600MHz",
      storage: "1TB NVMe SSD + 2TB HDD",
      approxPrice: 1900,
      useCase: 'Content Creation'
    },
    {
      id: 4,
      name: "The Minimalist",
      description: "Reliable performance for everyday tasks and office work.",
      cpu: "Intel Core i3-12100",
      gpu: "Integrated Intel UHD Graphics",
      ram: "8GB DDR4 3200MHz",
      storage: "256GB NVMe SSD",
      approxPrice: 450,
      useCase: 'General Use'
    },
     {
      id: 5,
      name: "High-End Gaming Beast",
      description: "Top-tier performance for 4K gaming and streaming.",
      cpu: "Intel Core i7-13700K",
      gpu: "NVIDIA GeForce RTX 4080",
      ram: "32GB DDR5 6000MHz",
      storage: "2TB NVMe SSD",
      approxPrice: 2800,
      useCase: 'Gaming'
    }
  ];

  constructor() { }

  // Method to get all build
  getBuilds(): Observable<PcBuild[]> {
    console.log("BuildDataService: getting mock builds...");
    // 'of' creates an Observable that immediately emits the provided value
    return of(this.mockBuilds);
  }

  // Method to get a single build
  getBuildById(id: number): Observable<PcBuild | undefined> {
    const build = this.mockBuilds.find(b => b.id === id);
    console.log(`BuildDataService: getting build by ID ${id}... Found:`, build);
    return of(build);
  }

  // Method for searching/filtering
  searchBuilds(searchTerm: string): Observable<PcBuild[]> {
     console.log(`BuildDataService: searching for "${searchTerm}"...`);
     if (!searchTerm.trim()) {
       // If no search term, return all builds
       return this.getBuilds();
     }
     searchTerm = searchTerm.toLowerCase();
     const filteredBuilds = this.mockBuilds.filter(build =>
       build.name.toLowerCase().includes(searchTerm) ||
       build.description.toLowerCase().includes(searchTerm) ||
       build.cpu.toLowerCase().includes(searchTerm) ||
       build.gpu.toLowerCase().includes(searchTerm) ||
       build.useCase.toLowerCase().includes(searchTerm)
     );
     return of(filteredBuilds);
  }
}