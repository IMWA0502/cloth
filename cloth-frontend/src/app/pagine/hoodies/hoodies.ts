import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hoodies',
  imports: [CommonModule],
  templateUrl: './hoodies.html',
  styleUrl: './hoodies.css'
})
export class Hoodies implements OnInit {
  images: string[] = [];

  constructor() {}

  async ngOnInit() {
    try {
      const res = await fetch('assets/prodotti/felpe/list.json');
      if (!res.ok) {
        console.error('Could not load felpe list.json', res.status);
        return;
      }
      const list: string[] = await res.json();
      // Build safe absolute paths; encodeURI preserves characters in filenames
      this.images = list.map((f) => `/assets/prodotti/felpe/${encodeURI(f)}`);
      console.log('Loaded felpe list:', list);
      console.log('Mapped image URLs:', this.images);
    } catch (err) {
      console.error('Error loading felpe list:', err);
    }
  }

  // If an image fails to load, hide it and log the URL so we can debug missing files
  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn('Image failed to load, hiding:', img?.src);
    img.style.display = 'none';
    img.alt = 'Immagine non disponibile';
  }

}
