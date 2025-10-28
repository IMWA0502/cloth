import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jeans',
  imports: [CommonModule],
  templateUrl: './jeans.html',
  styleUrl: './jeans.css'
})
export class Jeans implements OnInit {
  images: string[] = [];

  ngOnInit(): void {
    // Hardcoded list based on files in assets/prodotti/jeans
    const files = [
      'processed_jeans 11.png',
      'processed_jean4.png',
      'processed_jeans4.png',
      'processed_jeans2.png',
      'processed_jeans6.png',
      'processed_jeans12.png',
      'processed_jeans7.png',
      'processed_jeans10.png',
      'processed_jeans1.png',
      'processed_jeans 9.png',
      'processed_jeans 5.png',
      'processed_jeans 3.png',
      'processed_jeans8.png',
      'processed_jeans 13.png'
    ];

    this.images = files.map(f => `/assets/prodotti/jeans/${encodeURI(f)}`);
    console.log('Jeans images mapped:', this.images);
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn('Jeans image failed to load, hiding:', img?.src);
    img.style.display = 'none';
    img.alt = 'Immagine non disponibile';
  }
}
