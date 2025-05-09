// src/app/models/pc-build.model.ts
export interface PcBuild {
    id: number;                 // Unique identifier
    name: string;               // e.g., "Entry-Level Gaming Rig"
    description: string;        // Short description
    cpu: string;                // e.g., "AMD Ryzen 5 5600G"
    gpu: string;                // e.g., "Integrated Radeon Graphics" or "NVIDIA RTX 3060"
    ram: string;                // e.g., "16GB DDR4 3200MHz"
    storage: string;            // e.g., "1TB NVMe SSD"
    approxPrice: number;        // Approximate price
    useCase: 'Gaming' | 'Content Creation' | 'Workstation' | 'General Use'; // Use specific types
    // Add other relevant properties if desired (motherboard, PSU, case, image URL, etc.)
  }