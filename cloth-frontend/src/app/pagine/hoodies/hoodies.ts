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
  /** 1-based indices of images to visually enlarge without changing card size */
  enlargedIndices: number[] = [30, 28];
  loadError = false;
  private _fetched = false;

  constructor() {}

  async ngOnInit() {
    // Prevent repeated fetches during HMR / fast reload loops
    if (this._fetched) return;
    this._fetched = true;

    const url = `${location.origin}/assets/prodotti/felpe/list.json`;

    // simple retry: try once, on failure wait and try one more time
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) {
          // mark error but try again once
          console.warn(`Attempt ${attempt}: Could not load felpe list.json`, res.status);
          this.loadError = true;
          if (attempt === 2) return;
          await this._delay(1200);
          continue;
        }

        const list: string[] = await res.json();
        // Build safe absolute paths; encodeURI preserves characters in filenames
        this.images = list.map((f) => `/assets/prodotti/felpe/${encodeURI(f)}`);
        this.loadError = false;
        console.debug('Loaded felpe list:', list);
        return;
      } catch (err: any) {
        // fetch aborted or network error
        console.warn(`Attempt ${attempt}: Error loading felpe list:`, err && err.message ? err.message : err);
        this.loadError = true;
        if (attempt === 2) return;
        await this._delay(1200);
      }
    }
  }

  private _delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  // If an image fails to load, hide it and log the URL so we can debug missing files
  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn('Image failed to load, hiding:', img?.src);
    img.style.display = 'none';
    img.alt = 'Immagine non disponibile';
  }

  isEnlarged(indexZeroBased: number) {
    return this.enlargedIndices.includes(indexZeroBased + 1);
  }

}
